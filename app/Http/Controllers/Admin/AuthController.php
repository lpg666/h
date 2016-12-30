<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * 处理登录认证
     *
     * @return Response
     */
    public function getLogin(Request $request)
    {
        $referer = $request->get('referer', url('/'));
        return view('admin.authLogin',['referer' => $referer]);
    }

    public function postLogin(Request $request)
    {
        $this->validate($request,[
            'name' => 'required',
            'password' => 'required|min:6'
        ]);
        $name = $request->input('name');
        $password = $request->input('password');
        $member = User::where('name',$name)->first();
        if (empty($member)){
            $json['msg_type'] = -1;
            $json['msg'] = '用户不存在';
            return response()->json($json);
        }

        if(password_verify($password,$member->password)){
            $json['msg_type'] = 1;
            $json['msg'] = '登录成功';
            $member->save();
            loginSession($member);
            return response()->json($json);
        }
        $json['msg_type'] = -2;
        $json['msg'] = '密码不正确';
        return response()->json($json);
    }

    /**
     * 注册
     *
     * @return Response
     */

    public function getRegister(Request $request)
    {
        $referer = $request->get('referer', url('/'));
        return view('admin.authRegister',['referer' => $referer]);
    }

    public function postRegister(Request $request)
    {
        $this->validate($request,[
            'name' => 'required',
            'password' => 'required|min:6',
            'password1' => 'required|min:6'
        ]);
        $name = $request->input('name');
        $member = User::where('name',$name)->first();
        if (empty($member)){
            $member = User::create([
                'name' => $request->input('name'),
                'password' => password_hash($request->input('password'),PASSWORD_DEFAULT),
                'reg_ip' => $request->ip(),
                'real_name' => $request->input('name')
            ]);
            $json['msg_type'] = 1;
            $json['msg'] = '注册成功';
            return response()->json($json);
        }else{
            $json['msg_type'] = 0;
            $json['msg'] = '用户名已存在';
            return response()->json($json);
        }

    }

    /**
     * 退出登陆
     *
     */

    public function getLogout()
    {
        session()->forget('member');
        return redirect('auth/login');
    }
}