<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PhoneColor extends Model
{
    protected $table = 'phone_colors';
    public $timestamps = false;
    protected $guarded = ['id'];

    public function model()
    {
        return $this->belongsToMany('App\Model\PhoneModel','model_color','phone_color_id','phone_model_id');
    }
}