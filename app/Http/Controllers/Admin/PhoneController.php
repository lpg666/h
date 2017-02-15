<?php

namespace App\Http\Controllers\Admin;


use App\Model\PhoneOrder;
use Illuminate\Http\Request;

class PhoneController extends AdminController
{
    public function getIndex(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->except(['_token']);
            $data['ip'] = $request->getClientIp();
            $data['agent'] = $request->header('User-Agent');
            $data['last_time'] = time();
            if(false !== PhoneOrder::create($data)){
                return success();
            }else{
                return error();
            }
        }else{
            return view('admin.phone');
        }
    }
}