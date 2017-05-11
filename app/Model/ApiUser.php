<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/11 0011
 * Time: 下午 10:25
 */
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ApiUser extends Model
{
    protected $connection = 'mysql_test';
    protected $table = 'admin_operator';
    protected $guarded = ['id'];



}