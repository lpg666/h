<?php

//返回当前环境域名
function envDomain($v='') {
//	$environment = request()->header('ENVIRONMENT');
    $environment = isset($_SERVER['HTTP_ENVIRONMENT']) ? $_SERVER['HTTP_ENVIRONMENT'] : '';
    $main_domain = env('MAIN_DOMAIN', 'lpg.com');
    $domain = (!empty($v) ? "{$v}." : '')  . (!empty($environment) ? "{$environment}." : '') . $main_domain;
    return $domain;
}

//loginSession
function loginSession($member='') {
    if (empty($member)) return session('member');
    else session(['member'=>$member]);
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