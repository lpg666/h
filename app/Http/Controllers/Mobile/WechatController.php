<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/3
 * Time: 14:36
 */

namespace App\Http\Controllers\Mobile;

use App\Http\Controllers\Controller;
use App\Services\WechatCustom;
use Illuminate\Http\Request;

class WechatController extends Controller
{
    public function __construct(){}

    public function serve(Request $request){
        if($request->input('signature')) return WechatCustom::checkSignature($request);
    }

    public function menu() {
        return WechatCustom::menu();
    }
}