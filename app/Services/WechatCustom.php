<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/3
 * Time: 10:57
 */

namespace App\Services;

use App\Model\WechatMenu;
use EasyWeChat\Foundation\Application as Wechat;

class WechatCustom
{
    public static $Instances = [];
    public static $wechatInstance = null;
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
        self::$wechatInstance = self::$Instances[$key];
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

    /**
     * 自定义菜单
     */
    public static function menu() {
        $wechatMenu = self::$wechatInstance->menu;
        $lists = WechatMenu::where('account', self::$type)->get()->groupBy('parent_id')->toArray();
        if (empty($lists) || empty($lists[0])) return json_encode(['errcode' => 1, 'errmsg' => '数据不存在']);
        $buttons = [];
        foreach ($lists[0] as $menu) {
            $id = $menu['id'];
            $type = $menu['type'];
            $data = ['type' => $type, 'name' => $menu['name']];
            if ($type == 'view') $data['url'] = $menu['url'];
            if ($type == 'click') $data['key'] = $menu['key'];
            if ($type == 'media_id') $data['media_id'] = $menu['media_id'];
            if (isset($lists[$id]) && !empty($lists[$id])) {
                unset($data['type']); if (isset($data['url'])) unset($data['url']);
                if (isset($data['key'])) unset($data['key']);if (isset($data['media_id'])) unset($data['media_id']);
                $data['sub_button'] = [];
                foreach ($lists[$id] as $sub_menu) {
                    $sub_data = [];
                    if ($sub_menu['type'] == 'view') {
                        $sub_data = ['type' => $sub_menu['type'], 'name' => $sub_menu['name'], 'url' => $sub_menu['url']];
                    }
                    if ($sub_menu['type'] == 'click') {
                        $sub_data = ['type' => $sub_menu['type'], 'name' => $sub_menu['name'], 'key' => $sub_menu['key']];
                    }
                    if ($sub_menu['type'] == 'media_id') {
                        $sub_data = ['type' => $sub_menu['type'], 'name' => $sub_menu['name'], 'media_id' => $sub_menu['media_id']];
                    }
                    if (!empty($sub_data)) array_push($data['sub_button'], $sub_data);
                }
            }
            if (!empty($data)) array_push($buttons, $data);
        }
        return $wechatMenu->add($buttons);
    }
}
