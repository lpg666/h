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
Route::group(['namespace' => 'Admin', 'domain' => envDomain('gm'), 'as' => 'admin.'], function () {
    Route::controller('phone', 'PhoneController');
    Route::controller('auth', 'AuthController');
    Route::group(['middleware' => 'admin.auth'], function() {
        Route::get('/',function(){ return redirect('index');});
        Route::controller('index', 'IndexController');
        Route::controller('goods', 'GoodsController');
        Route::controller('order', 'OrderController');
        Route::controller('data', 'DataController');
        Route::controller('operator', 'OperatorController');
    });

});
