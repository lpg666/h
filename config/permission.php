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
            '11' => ['name' => 'index', 'desc' => '主页', 'link' => '/index'],
        ],
        [
            '21' => ['name' => 'goods', 'desc' => '全部商品', 'link' => '/goods/index'],
            '22' => ['name' => 'goods', 'desc' => '添加商品', 'link' => '/goods/add'],
            '23' => ['name' => 'goods', 'desc' => '下架商品', 'link' => '/goods/not-active'],
        ],
        [
            '31' => ['name' => 'operator', 'desc' => '管理员列表', 'link' => '/operator/index'],
            '32' => ['name' => 'operator', 'desc' => '角色管理', 'link' => '/operator/role-index'],
        ],
    ],
    'operations' => [
        'shopUpdate' => '编辑商品',
        'shopDestroy' => '删除商品',
    ]
];