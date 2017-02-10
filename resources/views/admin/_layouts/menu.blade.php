@foreach ($menus as $k=>$menu)
    <li class="{{ $menu[0]['name'] == explode('/',Request::getRequestUri())[1] ? 'active' : '' }}">
        <a href="{{ url('/index') }}">
            <i class="fa @if($k==0) fa-home @elseif($k==1) fa-diamond @elseif($k==2) fa-sun-o @endif"></i>
            <span class="nav-label">@if($k==0) 主页 @elseif($k==1) 商品管理 @elseif($k==2) 系统管理 @endif</span>
            @if($k!==0)
            <span class="fa arrow"></span>
            @endif
        </a>
        @if($k!==0)
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

{{--<li class="{{Request::url() == url('/index') ? 'active' : ''}}">--}}
    {{--<a href="{{ url('/index') }}">--}}
        {{--<i class="fa fa-home"></i>--}}
        {{--<span class="nav-label">主页</span>--}}
    {{--</a>--}}
{{--</li>--}}
{{--<li class="@if(Request::url() == url('goods/index') || Request::url() == url('goods/add') || Request::url() == url('goods/not-active') || Request::url() == url('goods/edit')) active @endif">--}}
    {{--<a href="#">--}}
        {{--<i class="fa fa-home"></i>--}}
        {{--<span class="nav-label">商品管理</span>--}}
        {{--<span class="fa arrow"></span>--}}
    {{--</a>--}}
    {{--<ul class="nav nav-second-level">--}}
        {{--<li>--}}
            {{--<a class="" href="{{ url('goods/index') }}">全部商品</a>--}}
        {{--</li>--}}
        {{--<li>--}}
            {{--<a class="" href="{{ url('goods/add') }}">添加商品</a>--}}
        {{--</li>--}}
        {{--<li>--}}
            {{--<a class="" href="{{ url('goods/not-active') }}">下架商品</a>--}}
        {{--</li>--}}
    {{--</ul>--}}
{{--</li>--}}
{{--<li class="@if(Request::url() == url('operator/index') || Request::url() == url('operator-role/index') || Request::url() == url('operator-role/edit')) active @endif">--}}
    {{--<a href="#">--}}
        {{--<i class="fa fa-sun-o"></i>--}}
        {{--<span class="nav-label">系统管理</span>--}}
        {{--<span class="fa arrow"></span>--}}
    {{--</a>--}}
    {{--<ul class="nav nav-second-level">--}}
        {{--<li>--}}
            {{--<a class="" href="{{ url('operator/index') }}">管理员列表</a>--}}
        {{--</li>--}}
        {{--<li>--}}
            {{--<a class="" href="{{ url('operator-role/index') }}">角色管理</a>--}}
        {{--</li>--}}
    {{--</ul>--}}
{{--</li>--}}