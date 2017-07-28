<?php
namespace App\Http\Middleware;
use Closure;
class Cors
{   //跨域中间建
    public function handle($request, Closure $next)
    {
        $request->header('Access-Control-Allow-Origin', 'http://vue.xfb315.com');
        $request->header('Access-Control-Allow-Headers', 'Origin, Content-Type, Cookie, Accept, multipart/form-data, application/json');
        $request->header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, OPTIONS');
        $request->header('Access-Control-Allow-Credentials', 'true');
        return $next($request);
    }
}
