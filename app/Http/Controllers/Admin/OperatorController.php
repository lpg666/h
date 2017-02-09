<?php

namespace App\Http\Controllers\Admin;

use App\Model\Operator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class OperatorController extends Controller
{
    public function getIndex(Request $request)
    {
        $data = Operator::orderBy('id','desc');
        $name = '';
        return view('admin.operator');
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
            $data['add_time'] = time();
            if(false !== Operator::create($data)){
                return successRedirect();
            }else{
                return errorRedirect();
            }
        }else{
            return view('admin.operatorCreate');
        }

    }
}
