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
    public static $type = 'service';
    public static $auth = 'oauth';

    public static function setWechatInstance($type='service',$auth='oauth')
    {
        self::$type = $type;
        self::$auth = $auth;
        $key = "{$type}_{$auth}";
        if (empty(self::$Instances[$key]))
        {
            $options = config('wechat.config.base') + config("wechat.config.account.{$type}") + config("wechat.config.{$auth}");
            self::$Instances[$key] = new Wechat($options);
        }
        self::$wechatInstance = self::$Instances[$key];
    }

    /**
     * 信息服务
     */
    public static function serve(){
        $wechatServer = self::$wechatInstance->server;
        $wechatServer->setMessageHandler(function ($message){
            switch ($message->MsgType) {
                case 'event':
                    return self::_eventMsgHandler($message);
                    break;
                case 'text':
                    return '收到文字消息';
                    break;
                case 'image':
                    return '收到图片消息';
                    break;
                case 'voice':
                    return '收到语音消息';
                    break;
                case 'video':
                    return '收到视频消息';
                    break;
                case 'location':
                    return '收到坐标消息';
                    break;
                case 'link':
                    return '收到链接消息';
                    break;
                // ... 其它消息
                default:
                    return '收到其它消息';
                    break;
            }
        });
        $response = $wechatServer->serve();
        return $response;
    }

    /**
     * 自定义事件消息
     */
    public static function _eventMsgHandler($message){
        switch ($message->Event){
            case 'subscribe':
                return '您好！欢迎关注，点击"点我试试"有惊喜哦~';
                break;
            case 'unsubscribe':
                break;
            case 'SCAN':

                break;
            case 'CLICK':
                $event_key = $message->EventKey;
                $reply = WechatMenu::where('key',$event_key)->first()->reply;
                if (!empty($reply)) return $reply;
                break;
            case 'VIEW':
                break;
            default:
                return '';

        }
    }

    /**
     * 授权获取用户信息
     */
    public static function oauthUser($target_url=''){
        $member = loginSession();
        $wechat_user = session('wechat_user');
        if(!empty($member)) return $member;
        $wechat_oauth_target_url = $target_url ? $target_url : request()->fullUrl();
        if(empty($wechat_user)){
            $wechatOauth = self::$wechatInstance->oauth;
            session(['wechat_oauth_target_url' => $wechat_oauth_target_url]);
            return $wechatOauth->redirect();
        }
        return $member;
    }

    /**
     * oauth授权登陆回调
     */
    public static function oauthCallback(){
        $wechatOauth = self::$wechatInstance->oauth;
        $wechatUser = $wechatOauth->User();
        $target_url = session('wechat_oauth_target_url') ? : '/';
        $subscribe = 1;
        if(self::$auth == 'oauth'){
            $wechat_user_origin_data = $wechatUser->getOriginal();
        }elseif(self::$auth == 'oauth_base'){
            $openid = $wechatUser->getId();
            $wechat_user_origin_data = self::getWechatUserInfo($openid);
            $subscribe = $wechat_user_origin_data['subscribe'];
        }
        if($subscribe){
            $member = 'lpg';
            session(['wechat_user'=>$wechat_user_origin_data]);
            loginSession($member);
        }
        $redirect_url = mb_strpos($target_url,'?') !==false ? "{$target_url}&subscribe={$subscribe}" : "{$target_url}?subscribe={$subscribe}";
        return redirect($redirect_url);
    }

    /**
     * 通过openid获取用户信息
     */
    public static function getWechatUserInfo($openid)
    {
        if (empty($openid)) return false;
        $wechatUser = self::$wechatInstance->user;
        return $wechatUser->get($openid);
    }

    /**
     * 开发url验证
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
