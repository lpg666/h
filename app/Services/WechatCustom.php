<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/3
 * Time: 10:57
 */

namespace App\Services;

use EasyWeChat\Foundation\Application as Wechat;

class WechatCustom
{
    public static $Instances = [];
    public static $wechatInstances = null;
    public static $type = 'subscribe';
    public static $auth = 'oauth';

    public static function setWechatInstances($type='subscribe',$auth='oauth')
    {
        self::$type = $type;
        self::$auth = $auth;
        $key = "{$type}_{$auth}";
        if (empty(self::$Instances[$key]))
        {
            $options = config('wechat.config.base') + config("wechat.config.account.{$type}")/* + config("wechat.config.{$auth}")*/;
            self::$Instances[$key] = new Wechat($options);
        }
        self::$wechatInstances = self::$Instances[$key];
    }

    /**
     * 开发url验证
     * @param $request
     * @return string
     */
    public static function checkSignature($request) {
        $signature = $request->get('signature');
        $timestamp = $request->get('timestamp');
        $nonce = $request->get('nonce');

        $echostr = $request->get('echostr');
        $token = env('WECHAT_TOKEN');

        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode( $tmpArr );
        $tmpStr = sha1( $tmpStr );

        if( $tmpStr == $signature ){
            return $echostr;
        }else{
            return '';
        }
    }
}
