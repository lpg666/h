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

    public function anyFx(Request $request){
        $curl = curl_init();
        $url='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx45a224e60d651136&secret=d7a975ce04146ce217d721e60c56b2af';
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $data = curl_exec($curl);
        curl_close($curl);
        $data=json_decode($data);
        $access_token=$data->access_token;

        $curl = curl_init();
        $url='https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='.$access_token.'&type=jsapi';
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $data = curl_exec($curl);
        curl_close($curl);
        $data=json_decode($data);
        $ticket=$data->ticket;

        $noncestr = $request->input('noncestr');
        $timestamp = $request->input('timestamp');
        $url = $request->input('url');
        $jsapi_ticket = sha1('jsapi_ticket='.$ticket.'&noncestr='.$noncestr.'&timestamp='.$timestamp.'&url='.$url);

        return $jsapi_ticket;
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