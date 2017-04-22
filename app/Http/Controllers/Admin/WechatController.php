<?php
namespace App\Http\Controllers\Admin;

use App\Model\WechatMenu;
use App\Services\WechatCustom;
use Illuminate\Http\Request;

class WechatController extends AdminController
{
    /**
     * 菜单列表
     */
    public function getMenu(Request $request)
    {
        $type = $request->input('type');
        $lists = WechatMenu::where('account',$type)->get()->groupBy('parent_id')->toArray();
        return view('admin.wechatMenu',['lists'=>$lists]);
    }

    /**
     * 添加菜单
     */
    public function anyAddMenu(Request $request){
        if($request->isMethod('post')){
            $this->validate($request,[
                'name' => 'required|between:1,7',
                'account' => 'required|in:service,subscribe',
                'type' => 'in:view,click,media_id',
                'url' => 'required_if:type,view',
                'key' => 'required_if:type,click',
                'reply' => 'required_if:type,click',
                'media_id' => 'required_if:type,media_id',
            ]);
            $data = $request->except(['_token']);
            if (false !== WechatMenu::create($data)){
                return success();
            }else{
                return error('添加失败');
            }
        }else{
            $type = $request->input('type');
            $data = WechatMenu::where('parent_id',0)->where('account',$type)->get();
            return view('admin.wechatAddMenu',['data'=>$data]);
        }
    }

    /**
     * 同步菜单
     */
    public function getSyncMenu($type)
    {
        WechatCustom::setWechatInstance($type);
        $rs = WechatCustom::menu();
        return response()->json($rs);
    }

    /**
     * 删除菜单
     */

    /**
     * 编辑菜单
     */

}