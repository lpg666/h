<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class OperatorController extends Controller
{
    public function getIndex(Request $request)
    {
        return view('admin.operator');
    }
}
