<?php
namespace App\Http\Controllers\Admin;

use App\Model\PhoneOrder;
use Illuminate\Http\Request;

class DataController extends AdminController
{
    public function anyPhoneIndex(Request $request)
    {
        if($request->isMethod('post')){
            $data = PhoneOrder::all();
            return success($data);
        }else{
            return view('admin.dataPhoneIndex');
        }
    }
}