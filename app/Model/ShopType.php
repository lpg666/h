<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ShopType extends Model
{
    protected $table = 'shop_type';
    protected $guarded = ['id'];
    public $timestamps = false;

    public function subtype()
    {
        return $this->hasMany('App\Model\ShopSubtype','type_id');
    }
}
