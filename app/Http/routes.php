<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::group(['namespace' => 'Api', 'as' => 'api.' , 'domain' => envDomain('api'), 'middleware' => ['api.log','api.kuayu']], function(){
    Route::group(['namespace' => 'v1', 'prefix' => 'v1'], function() {
        Route::get('order/index','OrderController@Order');
        Route::get('user/register','TestUserController@Register');
        Route::get('docs', function () {
            return \Illuminate\Support\Facades\View::make('docs.v1.index');
        });
    });
});

Route::group(['namespace' => 'Pc', 'domain' => envDomain('www'), 'as' => 'pc.'], function () {
    Route::get('/',function(){ return redirect('index');});
    Route::controller('index', 'IndexController');
});

Route::group(['namespace' => 'Admin', 'domain' => envDomain('gm'), 'as' => 'admin.'], function () {
    Route::controller('phone', 'PhoneController');
    Route::controller('auth', 'AuthController');
    Route::group(['middleware' => 'admin.auth'], function() {
        Route::get('/',function(){ return redirect('index');});
        Route::controller('index', 'IndexController');
        Route::controller('goods', 'GoodsController');
        Route::controller('order', 'OrderController');
        Route::controller('data', 'DataController');
        Route::controller('wechat', 'WechatController');
        Route::controller('operator', 'OperatorController');
    });

});

Route::group(['namespace' => 'Mobile', 'domain' => envDomain('m'), 'as' => 'mobile.'], function () {
    //
    Route::controller('yourWechat', 'YourWechatController');
    //Wechat
    Route::any('wechatService/serve', 'WechatServiceController@serve');
    Route::any('wechatService/oauth', 'WechatServiceController@oauth');
    Route::any('wechatService/oauth-base', 'WechatServiceController@oauthBase');
    Route::any('wechatService/menu', 'WechatServiceController@menu');
});
