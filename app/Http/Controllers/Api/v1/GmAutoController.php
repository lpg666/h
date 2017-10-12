<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Api\ApiController;
use App\Model\Operator;
use App\Model\OperatorLoginLog;
use Illuminate\Http\Request;

class GmAutoController extends ApiController{

    /**
     * 后台管理-用户登录
     * @param int $name 必填、用户名name
     * @param int $password 必填、密码password
     */
    public function Login(Request $request)
    {
        $this->validate($request,[
            'name' => 'required',
            'password' => 'required'
        ]);
        $name = $request->input('name');
        $password = $request->input('password');
        $operator = Operator::where('name', $name)->where('status', 1)->with('role')->first();
        if (empty($operator)){
            return error('用户不存在');
        }
        $password = md5(md5($password).$operator->salt);
        if($password == $operator->password){
            session(['operator'=>$operator]);
            $operator->logins =  $operator->logins+1;
            $operator->last_time = time();
            $operator->last_ip = $request->getClientIp();
            $operator->save();
            $log = OperatorLoginLog::create([
                'account' => $name,
                'ip' => $request->getClientIp(),
                'enterprise_id' => 0,
                'online_time' => 0
            ]);
            $data->email = $operator->email;
            $data->last_ip = $operator->last_ip;
            $data->name = $operator->name;
            $data->role = $operator->role;
            $data->role_id = $operator->role_id;
            $data->updated_at = $operator->updated_at;
            return success($data);
        }else{
            return error('密码不正确',-2);
        }
    }

}