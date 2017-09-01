<?php

namespace App\Http\Controllers\Admin;

use App\Model\Operator;
use App\Model\OperatorLoginLog;
use Illuminate\Http\Request;

class AuthController extends AdminController
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
            'password' => 'required'
        ]);
        $name = $request->input('name');
        $password = $request->input('password');
        $operator = Operator::where('name', $name)->where('status', 1)->with('role')->first();
        if (empty($operator)){
            $json['msg_type'] = -1;
            $json['msg'] = '用户不存在';
            return response()->json($json);
        }
        $password = md5(md5($password).$operator->salt);

        if($password == $operator->password){
            session(['operator'=>$operator]);
            $operator->logins =  $operator->logins+1;
            $operator->last_time = time();
            $operator->last_ip = $request->getClientIp();
            $operator->save();
            $json['msg_type'] = 1;
            $json['msg'] = '登录成功';
            $log = OperatorLoginLog::create([
                'account' => $name,
                'ip' => $request->getClientIp(),
                'enterprise_id' => 0,
                'online_time' => 0
            ]);
            return response()->json($json);
        }else{
            $json['msg_type'] = -2;
            $json['msg'] = '密码不正确';
            return response()->json($json);
        }

    }

    /**
     * 注册
     *
     * @return Response
     */

    /**
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
     * /

    /**
     * 退出登陆
     *
     */

    public function getLogout()
    {
        session()->forget('operator');
        return redirect('auth/login');
    }
}