<?php

namespace App\Http\Controllers\Admin;


use App\Model\PhoneHits;
use App\Model\PhoneOrder;
use Illuminate\Http\Request;

class PhoneController extends AdminController
{
    public function anyIndex(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->except(['_token']);
            $data['ip'] = $request->getClientIp();
            $data['agent'] = $request->header('User-Agent');

            $ip = PhoneHits::where('ip',$data['ip'])->orderBy('created_at')->get();
            $a = strtotime($ip -> last() -> created_at);
            if($ip->count() <= 0){
                PhoneHits::create(['ip'=>$data['ip'],'agent'=>$data['agent']]);
            }
            if($ip->count() > 0 && (time() - $a)/60>=30){ //每隔半个小时清空一次重复性
                PhoneHits::create(['ip'=>$data['ip'],'agent'=>$data['agent']]);
            }

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