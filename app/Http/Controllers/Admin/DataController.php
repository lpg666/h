<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

class DataController extends AdminController
{
    public function anyPhoneIndex(Request $request)
    {
        if($request->isMethod('post')){

        }else{
            return view('admin.dataPhoneIndex');
        }
    }
}