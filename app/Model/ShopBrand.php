<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ShopBrand extends Model
{
    protected $table = 'shop_brand';
    protected $guarded = ['id'];
    public $timestamps = false;

    public function subType()
    {
        return $this->belongsToMany('App\Model\ShopSubtype','brand_subtype','shop_brand_id','shop_subtype_id');
    }
}
