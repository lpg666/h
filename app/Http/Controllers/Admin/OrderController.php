<?php
namespace App\Http\Controllers\Admin;

use App\Model\PhoneOrder;
use Illuminate\Http\Request;

class OrderController extends AdminController
{
    public function getPhoneIndex(Request $request)
    {
        $sorting_field = $request->input('sorting_field') ? : 'id';
        $sorting_method = $request->input('sorting_method') ? : 'desc';
        $data = PhoneOrder::with('states','depot')->orderBy($sorting_field,$sorting_method);
        $userId = $request->input('user_id');
        $adId = $request->input('ad_id');
        $ip = $request->input('ip');
        $expressNumber = $request->input('express_number');
        $state = $request->input('state');
        $name = $request->input('name');
        $phone = $request->input('phone');
        $address = $request->input('address');
        $depotId = $request->input('depot_id');
        $expressModeId = $request->input('express_mode_id');
        $start = $request->input('start') ? : '';
        $end = $request->input('end') ? : '';
        $sendStart = $request->input('sendStart') ? : '';
        $sendEnd = $request->input('sendEnd') ? : '';
        $signStart = $request->input('signStart') ? : '';
        $signEnd = $request->input('signEnd') ? : '';
        if (!empty($userId)){
            $data->where('user_id','like',"%{$userId}%");
        }
        if (!empty($adId)){
            $data->where('ad_id','like',"%{$adId}%");
        }
        if (!empty($ip)){
            $data->where('ip','like',"%{$ip}%");
        }
        if (!empty($expressNumber)){
            $data->where('express_number','like',"%{$expressNumber}%");
        }
        if (!empty($depotId)){
            $data->where('depot_id','like',"%{$depotId}%");
        }
        if (!empty($expressModeId)){
            $data->where('express_mode_id','like',"%{$expressModeId}%");
        }
        if (!empty($state)){
            $data->where('state','like',"%{$state}%");
        }
        if (!empty($name)){
            $data->where('name','like',"%{$name}%");
        }
        if (!empty($phone)){
            $data->where('phone','like',"%{$phone}%");
        }
        if (!empty($address)){
            $data->where('address','like',"%{$address}%");
        }
        if (!empty($start)){
            $data->where('created_at','>=',$start);
        }
        if (!empty($end)){
            $data->where('created_at','<=',$end);
        }
        if (!empty($sendStart)){
            $data->where('send','>=',$sendStart);
        }
        if (!empty($sendEnd)){
            $data->where('send','<=',$sendEnd);
        }
        if (!empty($signStart)){
            $data->where('sign','>=',$signStart);
        }
        if (!empty($signEnd)){
            $data->where('sign','<=',$signEnd);
        }
        $lists = $data->paginate(15);
        return view('admin.orderPhoneIndex',['lists'=>$lists]);
    }

    public function anyPhoneEdit(Request $request)
    {
        if($request->isMethod('post')){
            $id = $request->input('id');
            $data = PhoneOrder::find($id);
            return view('admin.orderPhoneModal',['data'=>$data]);
        }else{

        }
    }
}