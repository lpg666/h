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
            '31' => ['name' => 'order', 'desc' => '手机订单管理', 'link' => '/order/phone-index'],
        ],
        [
            '41' => ['name' => 'data', 'desc' => '手机数据统计', 'link' => '/data/phone-index'],
        ],
        [
            '51' => ['name' => 'operator', 'desc' => '管理员列表', 'link' => '/operator/index'],
            '52' => ['name' => 'operator', 'desc' => '角色管理', 'link' => '/operator/role-index'],
        ],
    ],
    'operations' => [
        'shopActivate' => '上架商品',
        'shopFrozen' => '下架商品',
        'shopEdit' => '编辑商品',
        'shopDestroy' => '删除商品',
    ]
];