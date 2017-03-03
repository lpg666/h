<?php

return [
    'config' => [
        'base' => [
            /**
             * Debug 模式，bool 值：true/false
             *
             * 当值为 false 时，所有的日志都不会记录
             */
            'debug'  => env('WECHAT_DEBUG', true),

            /**
             * 使用 Laravel 的缓存系统
             */
            'use_laravel_cache' => true,

            /**
             * 日志配置
             *
             * level: 日志级别，可选为：d
             * debug/info/notice/warning/error/critical/alert/emergency
             * file：日志文件位置(绝对路径!!!)，要求可写权限
             */
            'log' => [
                'level' => env('WECHAT_LOG_LEVEL', 'debug'),
                'file'  => env('WECHAT_LOG_FILE', storage_path('logs/wechat.log')),
            ],
        ],
        'account' => [
            //订阅号
            'subscribe' => [
                'app_id'  => env('WECHAT_SUBSCRIBE_APPID', 'your-app-id'),          // AppID
                'secret'  => env('WECHAT_SUBSCRIBE_SECRET', 'your-app-secret'),     // AppSecret
                'token'   => env('WECHAT_TOKEN', 'your-token'),                     // Token
                'aes_key' => env('WECHAT_AES_KEY', ''),                             // EncodingAESKey
            ],
        ],

    ],
];