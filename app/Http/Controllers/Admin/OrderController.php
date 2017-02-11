<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

class OrderController extends AdminController
{
    public function getIndex(Request $request)
    {
        return view('admin.orderIndex');
    }

    public function getPhone()
    {
        return view('admin.phone');
    }
}