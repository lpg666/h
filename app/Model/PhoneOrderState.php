<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PhoneOrderState extends Model
{
    protected $table = 'phone_order_states';
    protected $guarded = ['id'];
}