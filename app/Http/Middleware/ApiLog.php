<?php

namespace App\Http\Middleware;

use App\Model\Member;
use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class ApiLog
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /*
        $controller = getCurrentControllerName();
        $method = getCurrentMethodName();
        if ($controller == 'Auth' && in_array($method, ['login'])) {
            $ip = $request->getClientIp();
            $key = "cc_ip_{$ip}";
            Redis::incr($key);
            Redis::expire($key, 10); //设置10秒后过期
            $cc_ip = Redis::get($key);
            if ($cc_ip >= 10) {     //10秒内请求大于10次视为攻击ip
                Redis::zincrby('cc_ips', 1, $ip);
                return error('间隔时间太短', -1, -1, 403);
            }
        }
        */
//        DB::table('log')->insert([
//            'add_time' => time(),
//            'script_name' => $request->getUri(),
//            'ip' => $request->ip(),
//            'query_string' => http_build_query($request->all())
//        ]);
        if (App::environment('local')) {
            $member = '';/*Member::find(463);*/
        } else {
            $sign = $request->input('sign') ? : '';
            if (!empty($sign)) $member = Member::where('sign', $sign)->first();
        }
        if (!empty($member)) loginSession($member);
        return $next($request);
    }
}
