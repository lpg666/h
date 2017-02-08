<?php

namespace App\Http\Controllers\Admin;

use App\Model\Operator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OperatorRoleController extends Controller
{
    public function getIndex()
    {
        $datas = Operator::orderBy('id','asc');
        return view('admin.operatorRole',['datas'=>$datas]);
    }

    public function getEdit()
    {

    }

    public function anyCreate(Request $request)
    {
        if ($request->isMethod('post')) {

        }else{
            return view('admin.operatorRoleCreate');
        }
    }
}
