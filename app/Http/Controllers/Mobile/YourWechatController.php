<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/7
 * Time: 16:44
 */
namespace App\Http\Controllers\Mobile;

use App\Http\Controllers\Controller;
use App\Services\WechatCustom;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;

class YourWechatController extends Controller
{
    public function anyData(Request $request)
    {
        if($request->isMethod('post')){

        }else{
            if($redirect = $this->_loginSession($request)) return $redirect;
            return view('mobile.yourWechatData');
        }
    }

    private function _loginSession($request)
    {
        if($request->input('subscribe') !== '0'){
            WechatCustom::setWechatInstance('service','oauth');
            $member = WechatCustom::oauthUser($request->fullUrl());
            if ($member instanceof RedirectResponse) return $member;
        }
        return '';
    }
}