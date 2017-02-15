<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PhoneOrder extends Model
{
    protected $table = 'phone_orders';
    protected $guarded = ['id'];
    public $timestamps = false;

    public function models() {
        return $this->belongsTo('App\Model\PhoneModel', 'model', 'id');
    }

    public function colors() {
        return $this->belongsTo('App\Model\PhoneColor', 'color', 'id');
    }

    public function capacitys() {
        return $this->belongsTo('App\Model\PhoneCapacity', 'capacity', 'id');
    }

    public function states() {
        return $this->belongsTo('App\Model\PhoneOrderState', 'state', 'id');
    }
}