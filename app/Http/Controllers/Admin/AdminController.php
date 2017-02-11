<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller {
    public function __construct()
    {
    }

    protected function checkOperation($operation)
    {
        $operator = session('operator');
        if (empty($operator->role) || empty($operator->role->operations)) return false;
        if (!in_array($operation, $operator->role->operations)) return false;
        return true;
    }

    protected function successRedirect($msg='成功', $redirect_url='') {
        Session::flash('success_msg', $msg);
        if ($redirect_url) {
            return redirect($redirect_url);
        } else {
            return redirect()->back();
        }
    }

    protected function errorRedirect($msg='失败', $redirect_url='') {
        Session::flash('error_msg', $msg);
        if ($redirect_url) {
            return redirect($redirect_url);
        } else {
            return redirect()->back();
        }
    }
}