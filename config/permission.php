<?php
/**
 * Created by PhpStorm.
 * User: GaryLang
 * Date: 2016/9/6
 * Time: 17:13
 */
return [
    'menus' => [
        [
            '11' => ['name' => '', 'desc' => '主页', 'link' => '/index'],
        ],
        [
            '21' => ['name' => '', 'desc' => '全部商品', 'link' => '/goods/index'],
            '22' => ['name' => '', 'desc' => '添加商品', 'link' => '/goods/add'],
            '23' => ['name' => '', 'desc' => '下架商品', 'link' => '/goods/not-active'],
        ],
        [
            '31' => ['name' => '', 'desc' => '文章管理', 'link' => '/article/index'],
            '32' => ['name' => '', 'desc' => '文章分类', 'link' => '/article/types'],
        ]
    ],
    'operations' => [
        'shopUpdate' => '编辑商品',
        'shopDestroy' => '删除商品',
    ]
];