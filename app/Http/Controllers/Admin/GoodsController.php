<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\ShopGoods;

class GoodsController extends Controller
{
    public function getIndex()
    {
        $goods = ShopGoods::orderBy('id','asc')->get();
        return view('admin.goodsIndex',['goods'=>$goods]);
    }
}