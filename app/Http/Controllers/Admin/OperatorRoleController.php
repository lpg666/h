<?php

namespace App\Http\Controllers\Admin;

use App\Model\OperatorRole;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OperatorRoleController extends Controller
{
    public function getIndex(Request $request)
    {
        $datas = OperatorRole::orderBy('id','asc');
        $name = $request->input('name');
        if(!empty($name)){
            $datas->where('name','like',"%{$name}%");
        }
        $lists = $datas->paginate(15);
        return view('admin.operatorRole',['lists'=>$lists]);
    }

    public function anyEdit(Request $request)
    {
        $id = $request->input('id');
        if ($request->isMethod('post')) {
            $data = $request->except(['_token']);
            if(false !== OperatorRole::find($id)->update($data)){
                return success();
            }else{
                return error();
            }
        }else{
            $data = OperatorRole::find($id);
            return view('admin.operatorRoleEdit',['data'=>$data]);
        }
    }

    public function anyCreate(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->except(['_token']);
            if(false !== OperatorRole::create($data)){
                return success();
            }else{
                return error();
            }
        }else{
            return view('admin.operatorRoleCreate');
        }
    }

    public function getDestroy(Request $request)
    {
        $id = $request->get('id');
        if(false !== OperatorRole::destroy($id)){
            return success();
        }else{
            return error();
        }
    }
}
