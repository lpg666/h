<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OperatorLoginLog extends Model
{
    protected $guarded = ['id'];
    protected $table = 'operator_login_log';
}
