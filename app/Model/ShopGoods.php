<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ShopGoods extends Model
{
    protected $table = 'shop_goods';
    protected $guarded = ['id'];

    public function pic()
    {
        return $this->hasMany('App\Model\ShopGoodsPic','goods_id');
    }
}
