<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\ShopGoods;
use Illuminate\Http\Request;

class GoodsController extends Controller
{
    public function getIndex()
    {
        $goods = ShopGoods::where('shown',1)->orderBy('id','asc')->get();
        return view('admin.goodsIndex',['goods'=>$goods]);
    }

    public function anyAdd(Request $request)
    {
        if ($request->isMethod('post')) {
        }else{
            return view('admin.goodsAdd');
        }

    }
}