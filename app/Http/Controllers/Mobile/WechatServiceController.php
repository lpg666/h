<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/3
 * Time: 14:34
 */
namespace App\Http\Controllers\Mobile;

use App\Services\WechatCustom;

class WechatServiceController extends WechatController
{
    public function __construct()
    {
        parent::__construct();
        WechatCustom::setWechatInstance('service');
    }

    public function oauth()
    {
        return WechatCustom::oauthCallback();
    }

    public function oauthBase()
    {
        WechatCustom::setWechatInstance('service','oauth_base');
        return WechatCustom::oauthCallback();
    }

}