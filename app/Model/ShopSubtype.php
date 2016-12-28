<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ShopSubtype extends Model
{
    protected $table = 'shop_subtype';
    protected $guarded = ['id'];
    public $timestamps = false;

    public function brand()
    {
        return $this->belongsToMany('App\Model\ShopBrand','brand_subtype','shop_subtype_id','shop_brand_id');
    }
}
