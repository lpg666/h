<?php
namespace App\Http\Controllers\Admin;

use App\Model\PhoneOrder;
use Illuminate\Http\Request;
use MongoDB\BSON\ObjectID;

class DataController extends AdminController
{
    public function anyPhoneIndex(Request $request)
    {
        if($request->isMethod('post')){
            $date = '2017-02-16';
            $day = [];
            $ms = [];
            for($a = 0; $a<24; $a++){
                if($a>=9){
                    $day[$a] = [$date.' '.$a.':00:00',$date.' '.($a+1).':00:00'];
                }else{
                    $day[$a] = [$date.' 0'.$a.':00:00',$date.' 0'.($a+1).':00:00'];
                }

            }
            foreach ($day as $key=>$value){
                $ms[$key] = PhoneOrder::whereBetween('created_at',$value)->count();
            }
            $data['ms'] = $ms;
            $data['day'] = $day;
            //dump($date,$day,$ms);
            return success($data);
        }else{
            return view('admin.dataPhoneIndex');
        }
    }
}