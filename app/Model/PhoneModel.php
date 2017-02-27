<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PhoneModel extends Model
{
    protected $table = 'phone_models';
    public $timestamps = false;
    protected $guarded = ['id'];
}