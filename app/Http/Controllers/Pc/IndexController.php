<?php

namespace App\Http\Controllers\Pc;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function getIndex()
    {
        dd('听说你要JJ服务器？');
        return view('pc/index');
    }
}