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
        $wechat_state = Str::random(40);
        session(['state' => $wechat_state]);
        return view('admin.authLogin',['referer' => $referer, 'wechat_state' => $wechat_state]);
    }

    public function postLogin(Request $request)
    {
        $this->validate($request,[
            'name' => 'required',
            'password' => 'required'
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
            loginSession($member);
            return response()->json($json);
        }
        $json['msg_type'] = -2;
        $json['msg'] = '密码不正确';
        return response()->json($json);
    }

    public function getRegister()
    {
        return view('admin.authRegister');
    }

    public function getLogout()
    {
        session()->forget('member');
        return redirect('auth/login');
    }
}