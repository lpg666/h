<?php

namespace App\Http\Controllers\Admin;

class IndexController extends AdminController
{
    public function getIndex()
    {
        return view('admin/index');
    }
}