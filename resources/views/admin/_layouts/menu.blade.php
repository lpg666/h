@foreach ($menus as $k=>$menu)
    <li class="{{ $menu[0]['name'] == explode('/',Request::getRequestUri())[1] ? 'active' : '' }}">
        <a href="@if($k==0){{ url('/index') }} @elseif($k==2) {{url('order/index')}} @endif">
            <i class="fa @if($k==0) fa-home @elseif($k==1) fa-diamond @elseif($k==2) fa fa-calendar-o @elseif($k==3) fa fa-line-chart @elseif($k==4) fa-sun-o @endif"></i>
            <span class="nav-label">@if($k==0) 主页 @elseif($k==1) 商品管理 @elseif($k==2) 订单管理 @elseif($k==3) 数据统计 @elseif($k==4) 系统管理 @endif</span>
            @if($k!==0 && $k!==2)
            <span class="fa arrow"></span>
            @endif
        </a>
        @if($k!==0 && $k!==2)
        <ul class="nav nav-second-level">
            @foreach($menu as $n)
                <li>
                    <a class="" href="{{ url($n['link']) }}">{{$n['desc']}}</a>
                </li>
            @endforeach
        </ul>
        @endif
    </li>
@endforeach