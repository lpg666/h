<?php
namespace App\Http\Controllers\Admin;

use App\Model\ShopGoods;
use App\Model\ShopGoodsPic;
use Illuminate\Http\Request;

class GoodsController extends AdminController
{
    public function getIndex()
    {
        $goods = ShopGoods::where('shown',1)->orderBy('id','asc')->paginate(15);
        return view('admin.goodsIndex',['goods'=>$goods]);
    }

    public function anyAdd(Request $request)
    {
        if ($request->isMethod('post')) {
            $this->validate($request,[
                'goods_name' => 'required', 'price' => 'required',  'cost_price' => 'required', 'shown' => 'required',
                'editorValue' => 'required'
            ]);
            $data = [
                'goods_name'=>$request->input('goods_name'),
                'price'=>$request->input('price'),
                'cost_price'=>$request->input('cost_price'),
                'shown'=>$request->input('shown'),
                'content'=>$request->input('editorValue'),
                'add_time'=>time(),
            ];
            $goods_add = ShopGoods::create($data);
            if(false === $goods_add){
                return error('添加失败');
            }else{
                $pic_id = $goods_add->id;
                $pics = $request->input('pics');
                if (!empty($pics)){
                    foreach ($pics as $pic){
                        if(empty($pic)) continue;
                        $data_pic = ['goods_id'=>$pic_id,'pic'=>$pic];
                        ShopGoodsPic::create($data_pic);
                    }
                }
                return success($pic_id);
            }
        }else{
            return view('admin.goodsAdd');
        }
    }

    public function postAddpic(Request $request)
    {
        $ext = ['JPG','JPEG','PNG','BMP'];
        if (!$request->hasFile('file')){
            return error('请选择要上传的投诉图片');
        }
        $file = $request->file('file');
        if (!$file->isValid()) {
            return error('上传图片失败');
        }
        if (!in_array(strtoupper($file->getClientOriginalExtension()), $ext)) {
            return error('上传图片类型不符合');
        }
        $file_path = '/uploadfiles/admin/';
        $filename = md5(time() . rand(1, 1000)) . '.' . $file->getClientOriginalExtension();
        $file->move(public_path($file_path), $filename);
        uploadUpyun(public_path($file_path.$filename), $file_path.$filename);
        return success($file_path.$filename);
    }

    public function anyEdit(Request $request)
    {
        $goods_id = $request->input('goods_id');
        if ($request->isMethod('post')) {
            if (false === $this->checkOperation('shopEdit')){
                return error('无此权限');
            }
            $this->validate($request,[
                'goods_name' => 'required', 'price' => 'required',  'cost_price' => 'required', 'shown' => 'required',
                'editorValue' => 'required'
            ]);
            $data = [
                'goods_name'=>$request->input('goods_name'),
                'price'=>$request->input('price'),
                'cost_price'=>$request->input('cost_price'),
                'shown'=>$request->input('shown'),
                'content'=>$request->input('editorValue'),
                'add_time'=>time(),
            ];
            $goods_edit = ShopGoods::where('id',$goods_id)->update($data);
            if(false === $goods_edit){
                return error('更新失败');
            }else{
                $goods_addpic = $request->input('pics');
                if(!empty($goods_addpic)){
                    foreach ($goods_addpic as $pic){
                        if(empty($pic)) continue;
                        $data_pic = ['goods_id'=>$goods_id,'pic'=>$pic];
                        ShopGoodsPic::create($data_pic);
                    }
                }
                return success();
            }
        }else{
            $datas = ShopGoods::with('pic')->where('id',$goods_id)->first();
            return view('admin.goodsEdit',['datas'=>$datas]);
        }
    }

    public function postEditpic(Request $request)
    {
        if (!$request->has('edit_pic')){
            return error('请选择要上传的投诉图片');
        }
        $edit_pic_id = $request->input('edit_pic_id');
        if(empty($edit_pic_id)){
            return error('提交参数出错');
        }
        $base64 = $request->input('edit_pic');
        if(preg_match('/^(data:\s*image\/(\w+);base64,)/',$base64,$result)){
            $base64_ext = $result[2];
        }
        $base64_body = substr(strstr($base64,','),1);
        $file = base64_decode($base64_body);

        $file_path = '/uploadfiles/admin/';
        $filename = md5(time() . rand(1, 1000)) . '.' . $base64_ext;
        $file = file_put_contents(public_path($file_path.$filename),$file);
        if($file<=0){
            return error('更新图片失败');
        }else{
            uploadUpyun(public_path($file_path.$filename), $file_path.$filename);
            unlink(public_path(ShopGoodsPic::where('id',$edit_pic_id)->first()->pic));
            ShopGoodsPic::where('id',$edit_pic_id)->update(['pic'=>$file_path.$filename]);
            return success($file_path.$filename);
        }
    }

    public function postDeletepic(Request $request)
    {
        $pic_id = $request->input('pic_id');
        if(empty($pic_id)){
            return error('提交参数出错');
        }
        $pic_path = ShopGoodsPic::where('id',$pic_id)->first();
        if(empty($pic_path->pic)){
            return error('图片不存在');
        }else{
            $del = unlink(public_path($pic_path->pic));
            if (false === $del){
                return error('删除失败');
            }else{
                $pic_path->delete();
                return success();
            }
        }
    }

    public function getNotActive()
    {
        $goods = ShopGoods::where('shown',0)->orderBy('id','asc')->paginate(15);
        return view('admin.goodsNotActive',['goods'=>$goods]);
    }

    public function getActivate(Request $request){
        if(false === $this->checkOperation('shopActivate'))
        {
            return error('无此权限');
        }
        $id = $request->input('id');
        if(false !== ShopGoods::where('id',$id)->update(['shown'=>1]))
        {
            return success();
        }else{
            return error('上架失败');
        }
    }

    public function getFrozen(Request $request){
        if(false === $this->checkOperation('shopFrozen'))
        {
            return error('无此权限');
        }
        $id = $request->input('id');
        if(false !== ShopGoods::where('id',$id)->update(['shown'=>0]))
        {
            return success();
        }else{
            return error('下架失败');
        }
    }
}