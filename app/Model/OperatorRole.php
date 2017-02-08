<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OperatorRole extends Model
{
    protected $guarded = ['id'];
    protected $casts = ['operations' => 'array', 'menus' => 'array'];
}
