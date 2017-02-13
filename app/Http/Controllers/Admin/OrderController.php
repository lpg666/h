<?php
namespace App\Http\Controllers\Admin;

use App\Model\PhoneOrder;
use Illuminate\Http\Request;

class OrderController extends AdminController
{
    public function anyPhone(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->except(['_token']);
            $data['ip'] = $request->getClientIp();
            $data['agent'] = $request->header('User-Agent');
            if(false !== PhoneOrder::create($data)){
                return success();
            }else{
                return error();
            }
        }else{
            return view('admin.phone');
        }
    }

    public function getIndex(Request $request)
    {
        $sorting_field = $request->input('sorting_field') ? : 'id';
        $sorting_method = $request->input('sorting_method') ? : 'asc';
        $data = PhoneOrder::with('models')->with('colors')->with('capacitys')->with('states')->orderBy($sorting_field,$sorting_method);
        $model = $request->input('model');
        $state = $request->input('state');
        $name = $request->input('name');
        $phone = $request->input('phone') ? : '';
        $start = $request->input('start') ? : '';
        $end = $request->input('end');
        if (!empty($model)){
            $data->where('model','like',"%{$model}%");
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
        if (!empty($start)){
            $data->where('created_at','>=',$start);
        }
        if (!empty($end)){
            $data->where('created_at','<=',$end);
        }
        $lists = $data->paginate(15);
        return view('admin.orderIndex',['lists'=>$lists]);
    }

    public function anyEdit(Request $request)
    {
        $id = $request->input('id');
        if($request->isMethod('post')){
            $sorting_field = $request->input('sorting_field');
            $state = $request->input('state');
            if(false !== PhoneOrder::find($id)->update(['state'=>$state])){
                return success($sorting_field);
            }else{
                return error();
            }
        }else{
            $data = PhoneOrder::find($id);
            return view('admin.orderEdit',['data'=>$data]);
        }
    }
}