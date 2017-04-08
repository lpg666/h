<?php

namespace App\Http\Controllers\Pc;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function getIndex()
    {
        return view('pc.index');
    }
}