<?php
/**
 * Created by PhpStorm.
 * User: GaryLang
 * Date: 2016/8/23
 * Time: 17:26
 */
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller{

    public function validate(Request $request, array $rules, array $messages = [], array $customAttributes = []) {
        $validator = Validator::make($request->all(), $rules, $messages, $customAttributes);
        if ($validator->fails()) {
            return error($validator->errors()->first(), 412);
        }
        return true;
    }
}