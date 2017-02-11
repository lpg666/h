<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PhoneModel extends Model
{
    protected $table = 'phone_models';
    public $timestamps = false;
    protected $guarded = ['id'];

    public function color()
    {
        return $this->belongsToMany('App\Model\PhoneColor','model_color','phone_model_id','phone_color_id');
    }
}