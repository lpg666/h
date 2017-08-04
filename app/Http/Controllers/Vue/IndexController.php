<?php

namespace App\Http\Controllers\Vue;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function getIndex()
    {
        return view('vue.index');
    }
}