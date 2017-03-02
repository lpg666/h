<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Api\ApiController;
use App\Model\PhoneOrder;
use Illuminate\Http\Request;

class OrderController extends ApiController{

    /**
     * 订单详情
     * @param int $id 必填、订单id
     */
    public function Order(Request $request)
    {
        $id = $request->get('id');
        $order = PhoneOrder::find($id);
        return success($order);
    }

}