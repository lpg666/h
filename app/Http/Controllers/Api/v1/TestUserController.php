<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Api\ApiController;
use App\Model\ApiUser;
use Illuminate\Http\Request;

class TestUserController extends ApiController{

    /**
     * 用户注册
     * @param string $name 必填、用户登录账号
     * @param string $password >=6 必填、用户密码
     * @param string $password_confirmation >=6 必填、用户密码重复
     * @param string $role_id 必填、用户名称
     *
     */
    public function Register(Request $request)
    {
        $rules = [
            'name' => 'required',
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
            'role_id' => 'required',
        ];
        $message = [
            'name.required' => '账号不能为空',
            'password.required' => '密码不能为空',
            'password_confirmation.required' => '密码不能为空',
            'password.min' => '密码不能少于6位',
            'password_confirmation.min' => '密码不能少于6位',
            'password.confirmed' => '两次密码不一致',
            'role_id.required' => '名称不能为空'

        ];
        if (($error = $this->validate($request,$rules,$message)) !== true) return $error;
        $name = $request->input('name');
        $password = $request->input('password');
        $member = ApiUser::where('name',$name)->first();
        $password = md5($password.getRandChar());
        if (empty($member)) {
            $member = ApiUser::create([
                'password' => $password,
                'name' => $request->input('name'),
                'real_name' => $request->input('real_name'),
                'salt' => getRandChar(),
                'role_id' => $request->input('avatar', ''),
                'last_ip' => $request->ip(),
                'last_time' => time(),
                'status' => 1,
                'logins' => 1,
                'is_admin' => 0
            ]);
            if (false !== $member) {
                $json['msg_type'] = 1;
                $json['msg'] = '注册成功';
                return response()->json($json);
            } else {
                $json['msg_type'] = 2;
                $json['msg'] = '数据错误';
                return response()->json($json);
            }
        }else{
            $json['msg_type'] = 0;
            $json['msg'] = '用户名已存在';
            return response()->json($json);
        }
    }

}