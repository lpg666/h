<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PhoneCapacity extends Model
{
    protected $table = 'phone_capacitys';
    public $timestamps = false;
    protected $guarded = ['id'];

    public function model()
    {
        return $this->belongsToMany('App\Model\PhoneModel','model_capacity','phone_capacity_id','phone_model_id');
    }
}