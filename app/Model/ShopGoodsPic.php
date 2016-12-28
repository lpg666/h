<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ShopGoodsPic extends Model
{
    protected $table = 'shop_goods_pic';
    protected $guarded = ['id'];
    public $timestamps = false;
}
