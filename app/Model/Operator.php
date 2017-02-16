<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Operator extends Model
{
    protected $table = 'operator';
    protected $guarded = ['id'];

    public function role() {
        return $this->belongsTo('App\Model\OperatorRole', 'role_id', 'id');
    }
}
