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
            /*if($redirect = $this->_loginSession($request)) return $redirect;

            $member = loginSession();

            dump($member);*/
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

    public function anyFx(Request $request){
        $jsapiTicket = $this->getJsApiTicket();

        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
        $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        $noncestr = $this->createNonceStr();
        $timestamp = time();

        $string ='jsapi_ticket='.$jsapiTicket.'&noncestr='.$noncestr.'&timestamp='.$timestamp.'&url='.$url;

        $jsapi_ticket = sha1($string);

        $signPackage = array(
            "appId"     => 'wx45a224e60d651136',
            "nonceStr"  => $noncestr,
            "timestamp" => $timestamp,
            "url"       => $url,
            "signature" => $jsapi_ticket,
            "rawString" => $string
        );

        return json_encode($signPackage);
    }

    private function createNonceStr($length = 16) {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $str = "";
        for ($i = 0; $i < $length; $i++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }

    private function getJsApiTicket() {
        $data=session('jsapi_ticket');
        if($data){
            if ($data->expire_time < time()) {
                $accessToken = $this->getAccessToken();

                $curl = curl_init();
                $url='https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='.$accessToken.'&type=jsapi';
                curl_setopt($curl, CURLOPT_URL, $url);
                curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
                $datas = curl_exec($curl);
                curl_close($curl);
                $datas=json_decode($datas);
                $ticket=$datas->ticket;
                if($ticket){
                    $data['expire_time'] = time() + 7000;
                    $data['jsapi_ticket'] = $ticket;
                    session('jsapi_ticket',$data);
                }
            }else{
                $ticket = $data->jsapi_ticket;
            }
        }else{
            $accessToken = $this->getAccessToken();
            $curl = curl_init();
            $url='https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='.$accessToken.'&type=jsapi';
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            $datas = curl_exec($curl);
            curl_close($curl);
            $datas=json_decode($datas);
            $ticket=$datas->ticket;
            if($ticket){
                $data['expire_time'] = time() + 7000;
                $data['jsapi_ticket'] = $ticket;
                session('jsapi_ticket',$data);
            }
        }

        return $ticket;
    }

    private function getAccessToken() {

        $data=session('access_token');
        if($data){
            if ($data->expire_time < time()) {
                $curl = curl_init();
                $url='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx45a224e60d651136&secret=d7a975ce04146ce217d721e60c56b2af';
                curl_setopt($curl, CURLOPT_URL, $url);
                curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
                $datas = curl_exec($curl);
                curl_close($curl);
                $datas=json_decode($datas);
                $access_token=$datas->access_token;
                if ($access_token) {
                    $data['expire_time'] = time() + 7000;
                    $data['access_token'] = $access_token;
                    session('access_token',$data);
                }
            }else{
                $access_token = $data->access_token;
            }
        }else{
            $curl = curl_init();
            $url='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx45a224e60d651136&secret=d7a975ce04146ce217d721e60c56b2af';
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            $datas = curl_exec($curl);
            curl_close($curl);
            $datas=json_decode($datas);
            $access_token=$datas->access_token;
            if ($access_token) {
                $data['expire_time'] = time() + 7000;
                $data['access_token'] = $access_token;
                session('access_token',$data);
            }
        }

        return $access_token;

    }
}