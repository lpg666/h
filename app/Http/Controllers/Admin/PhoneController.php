<?php

namespace App\Http\Controllers\Admin;


use App\Model\PhoneHits;
use App\Model\PhoneOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PhoneController extends AdminController
{
    public function anyIndex(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->except(['_token']);
            $data['ip'] = $request->getClientIp();
            $ip_info=$this->_IpAddress($data['ip']);
            if (false !== $ip_info){
                $data['ip_address'] = $ip_info['province'].$ip_info['city'];
            }

            if (preg_match('/(?:\()(.*)(?:\;)/i',$request->header('User-Agent'),$match)){
                $data['agent'] = $match[1];
            }
            $ip = PhoneHits::where('ip',$data['ip'])->orderBy('created_at')->get();

            if($ip->count() <= 0){
                PhoneHits::create(['ip'=>$data['ip'],'agent'=>$data['agent'],'ip_address'=>$data['ip_address']]);
            }
            if($ip->count() > 0){
                $a = strtotime($ip -> last() -> created_at);
                if((time() - $a)/60>=30){//每隔半个小时清空一次重复性
                    PhoneHits::create(['ip'=>$data['ip'],'agent'=>$data['agent'],'ip_address'=>$data['ip_address']]);
                }
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

    private function _IpAddress($ip)
    {
        $ip = '117.136.39.210';
        if(empty($ip)){
            return false;
        }
        $res = file_get_contents('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=' . $ip);
        if(empty($res)){ return false; }
        $jsonMatches = array();
        preg_match('#\{.+?\}#', $res, $jsonMatches);
        if(!isset($jsonMatches[0])){ return false; }
        $json = json_decode($jsonMatches[0], true);
        if(isset($json['ret']) && $json['ret'] == 1){
            $json['ip'] = $ip;
            unset($json['ret']);
        }else{
            return false;
        }
        return $json;
    }
}