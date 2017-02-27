<?php

namespace App\Http\Controllers\Admin;

use App\Model\Operator;
use App\Model\OperatorRole;
use Illuminate\Http\Request;

class OperatorController extends AdminController
{
    public function getIndex(Request $request)
    {
        $data = Operator::with('role')->orderBy('id','desc');
        $name = $request->input('name');
        $real_name = $request->input('real_name');
        $role_id = $request->input('role_id');
        if (!empty($name)){
            $data->where('name','like',"%{$name}%");
        }
        if (!empty($real_name)){
            $data->where('real_name','like',"%{$real_name}%");
        }if (!empty($role_id)){
        $data->where('role_id','like',"%{$role_id}%");
        }
        $lists = $data->paginate(15);
        return view('admin.operator',['lists'=>$lists]);
    }

    public function anyCreate(Request $request)
    {
        if ($request->isMethod('post')) {
            $this->validate($request,[
                'name'=>'required',
                'real_name'=>'required',
                'role_id'=>'required',
                'email'=>'required',
                'password'=>'required | confirmed',
                'password_confirmation'=>'required'
            ]);
            $data = $request->except(['_token','password','password_confirmation']);
            $data['salt'] = getRandChar();
            $data['password'] = md5(md5($request->input('password')) . $data['salt']);
            if(false !== Operator::create($data)){
                return success();
            }else{
                return error();
            }
        }else{
            return view('admin.operatorCreate');
        }
    }

    public function anyEdit(Request $request)
    {
        $id = $request->input('id');
        $operator = Operator::find($id);
        if($request->isMethod('post')){
            $this->validate($request,[
                'name'=>'required',
                'real_name'=>'required',
                'role_id'=>'required',
                'email'=>'required',
                'password'=>'confirmed',
            ]);
            $data = $request->except(['_token','password','password_confirmation']);
            if ($request->has('password')) {
                $data['salt'] = getRandChar();
                $data['password'] =  md5(md5($request->input('password')) . $data['salt']);
            }
            if(false !== $operator->update($data)){
                return success();
            }else{
                return error();
            }
        }else{

            return view('admin.operatorEdit',['data'=>$operator]);
        }
    }

    public function getDestroy(Request $request)
    {
        $id = $request->get('id');
        $is_admin = Operator::find($id);
        if($is_admin->is_admin == 1){
            return error('该账号无法被删除');
        }
        if(false !== Operator::destroy($id)){
            return success();
        }else{
            return error();
        }

    }

    /**
     *
     */
    public function getRoleIndex(Request $request)
    {
        $datas = OperatorRole::orderBy('id','asc');
        $name = $request->input('name');
        if(!empty($name)){
            $datas->where('name','like',"%{$name}%");
        }
        $lists = $datas->paginate(15);
        return view('admin.operatorRole',['lists'=>$lists]);
    }

    public function anyRoleEdit(Request $request)
    {
        $id = $request->input('id');
        if ($request->isMethod('post')) {
            $data = $request->except(['_token']);
            if(empty($data['menus'])){
                $data['menus'] = null;
            }
            if(empty($data['operations'])){
                $data['operations'] = null;
            }
            if(false !== OperatorRole::find($id)->update($data)){
                return success();
            }else{
                return error();
            }
        }else{
            $data = OperatorRole::find($id);
            return view('admin.operatorRoleEdit',['data'=>$data]);
        }
    }

    public function anyRoleCreate(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->except(['_token']);
            if(false !== OperatorRole::create($data)){
                return success();
            }else{
                return error();
            }
        }else{
            return view('admin.operatorRoleCreate');
        }
    }

    public function getRoleDestroy(Request $request)
    {
        $id = $request->get('id');
        $status = OperatorRole::find($id);
        if($status->status == 1){
            return error('该角色无法被删除');
        }
        if(false !== OperatorRole::destroy($id)){
            return success();
        }else{
            return error();
        }
    }
}
