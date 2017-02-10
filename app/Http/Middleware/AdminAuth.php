<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $operator = session('operator');
        if(empty($operator) || empty($operator->role)){
            return redirect('auth/login');
        }
        $menus = config('permission.menus');
        $my_menus = [];
        foreach ($menus as $menu) {
            $tmp_menus = [];
            foreach ($menu as $k=>$sub_menu) {
                if (in_array($k, $operator->role->menus)) array_push($tmp_menus, $sub_menu);
            }
            if (!empty($tmp_menus)) array_push($my_menus, $tmp_menus);
        }
        view()->share('menus', $my_menus);
        return $next($request);
    }
}
