<?php

//返回当前环境域名
function envDomain($v='') {
//	$environment = request()->header('ENVIRONMENT');
    $environment = isset($_SERVER['HTTP_ENVIRONMENT']) ? $_SERVER['HTTP_ENVIRONMENT'] : '';
    $main_domain = env('MAIN_DOMAIN', 'lpg6.xyz');
    $domain = (!empty($v) ? "{$v}." : '')  . (!empty($environment) ? "{$environment}." : '') . $main_domain;
    return $domain;
}

//loginSession
function loginSession($member='') {
    if (empty($member)){
        $sign = request()->input('sign');
        if (empty($sign)){
            return session('member');
        }else{
            return 'sign';
        }
    }else{
        session(['member'=>$member]);
    }
}

//trigger error, exit
function error($msg='失败', $msg_type = -1, $error = 1, $http_code=200)
{
    $json['error'] = $error;
    $json['msg_type'] = $msg_type;
    $json['msg'] = $msg;
    return response()->json($json, $http_code);
}

//success and exit
function success($data=array(), $msg = '成功', $msg_type = 200, $element = array())
{
    /*$notify = 0;
    if (session('member')) {
        $member = session('member');
        $notify = \App\Model\Message::where('member_id', $member->id)->where('readed', '0')->count();
    }*/
    $json['data'] = $data;
    /*$json['notify'] = $notify;*/
    $json['msg_type'] = $msg_type;
    $json['msg'] = $msg;
    foreach ($element as $key => $val) {
        $json[$key] = $val;
    }
    return response()->json($json);
}

function successRedirect($msg='成功', $redirect_url='') {
    \Illuminate\Support\Facades\Session::flash('success_msg', $msg);
    if ($redirect_url) {
        return redirect($redirect_url);
    } else {
        return redirect()->back();
    }
}

function errorRedirect($msg='失败', $redirect_url='') {
    \Illuminate\Support\Facades\Session::flash('error_msg', $msg);
    if ($redirect_url) {
        return redirect($redirect_url);
    } else {
        return redirect()->back();
    }
}

//将时间转换成刚刚、分钟、小时前
function getTimeWord($date){
    $curr = time();
    //$date = strtotime($date);
    $tmp = $curr - $date;
    if($tmp < 60){
        $word = '刚刚';
    }else if($tmp < 3600){
        $word = floor($tmp/60).'分钟前';
    }else if($tmp < 86400){
        $word = floor($tmp/3600).'小时前';
    }else if($tmp < 259200){//3天内
        $word = floor($tmp/86400).'天前';
    }else{
        $word = date('n月j日',$date);
    }
    return $word;
}

//图片转化为base64格式
function image2base64($url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_NOBODY, 0);
    $data = curl_exec($ch);
    $mime_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
    if (!in_array($mime_type, array("image/jpg", "image/jpeg", "image/png")))
    {
        return $url;
    }
    $re_encoded_image = sprintf(
        'data:%s;base64,%s', $mime_type, base64_encode($data)
    );
    return $re_encoded_image;
}

//curl保存图片
function saveUrlImage($url, $save_path) {
    $curl = curl_init($url);
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
    $imageData = curl_exec($curl);
    curl_close($curl);
    $tp = @fopen(public_path($save_path), 'a');
    fwrite($tp, $imageData);
    fclose($tp);
    uploadUpyun(public_path($save_path), $save_path);
    return $save_path;
}

/**
 * 上传又拍云
 *
 * @param $localFile
 * @param $upyunFile
 * @return string
 */
function uploadUpyun($localFile, $upyunFile)
{

    $upyun = new UpYun(config('app.upyun_bucketname'), config('app.upyun_operator_name'), config('app.upyun_operator_pwd'));
    try {
        $fh = @fopen($localFile, 'rb');
        $rsp = @$upyun->writeFile($upyunFile, $fh, true);   // 上传图片，自动创建目录
        fclose($fh);
        $file = config('app.upyun_domain') . $upyunFile;
    } catch (Exception $e) {
        $file = trim($localFile, '.');
    }
    return $file;
}

function picDomain($path, $ext='') {
    if (empty($path)) return '';
    $domain = config('app.upyun_domain');
    if (!empty($ext)) $path .= $ext;
    if (mb_stripos($path, $domain) !== false) return $path;
    return $domain . $path;
}

/**
 * 获取随机字符串
 *
 * @param int $len 获取长度
 * @return string
 */
function getRandChar($len = 6)
{
    $str = '';
    $rand = 'qwertyuiopasdfghjklzxcvbnm1234567890';
    for ($i = 0; $i < $len; $i++) {
        $str .= $rand[rand(0, strlen($rand) - 1)];
    }
    return $str;
}

/**
 * 获取当前控制器名
 *
 * @return string
 */
function getCurrentControllerName()
{
    $action = getCurrentAction();
    if (!$action) return false;
    $rs = strrchr($action['controller'], '\\');
    $rs = str_ireplace('Controller', '', $rs);
    return trim($rs, '\\');
}

/**
 * 获取当前方法名
 *
 * @return string
 */
function getCurrentMethodName()
{
    $action = getCurrentAction();
    if (!$action) return false;
    return $action['method'];
}

/**
 * 获取当前控制器与方法
 *
 * @return array
 */
function getCurrentAction()
{
    $action = \Route::current()->getActionName();
    if (stripos($action, '@') === false) return false;
    list($class, $method) = explode('@', $action);
    return ['controller' => $class, 'method' => $method];
}