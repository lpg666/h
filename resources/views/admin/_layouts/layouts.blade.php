<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('page_title')</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="shortcut icon" href="/admin/img/favicon.ico">
    <link rel="stylesheet" href="{{ elixir('admin/css/all.css') }}">
    <!--[if lt IE 9]>
    <meta http-equiv="refresh" content="0;ie.html" />
    <![endif]-->
    @yield('header_assets')
</head>

<body class="fixed-sidebar full-height-layout gray-bg" style="overflow:hidden">
<div id="wrapper">
    <!--左侧导航开始-->
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="nav-close"><i class="fa fa-times-circle"></i>
        </div>
        <div class="sidebar-collapse">
            <ul class="nav" id="side-menu">
                <li class="nav-header">
                    <div class="dropdown profile-element">
                        <span><img alt="image" class="img-circle" src="/admin/img/profile_small.jpg" /></span>
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="clear">
                               <span class="block m-t-xs"><strong class="font-bold">{{ session('operator')->real_name }}</strong></span>
                                <span class="text-muted text-xs block">{{ session('operator')->role->name }}<b class="caret"></b></span>
                                </span>
                        </a>
                        <ul class="dropdown-menu animated fadeInRight m-t-xs">
                            {{--<li><a class="J_menuItem" href="form_avatar.html">修改头像</a>
                            </li>
                            <li><a class="J_menuItem" href="profile.html">个人资料</a>
                            </li>
                            <li><a class="J_menuItem" href="contacts.html">联系我们</a>
                            </li>
                            <li><a class="J_menuItem" href="mailbox.html">信箱</a>
                            </li>
                            <li class="divider"></li>--}}
                            <li><a href="{{url('auth/logout')}}">安全退出</a>
                            </li>
                        </ul>
                    </div>
                    <div class="logo-element">H+
                    </div>
                </li>
                @include('admin._layouts.menu')
            </ul>
        </div>
    </nav>
    <!--左侧导航结束-->
    <!--右侧部分开始-->
    <div id="page-wrapper" class="gray-bg dashbard-1">
        <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header"><a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
                    <form role="search" class="navbar-form-custom" method="post" action="http://www.zi-han.net/theme/hplus/search_results.html">
                        <div class="form-group">
                            <input type="text" placeholder="请输入您需要查找的内容 …" class="form-control" name="top-search" id="top-search">
                        </div>
                    </form>
                </div>
            </nav>
        </div>
        <div class="row content-tabs">
            <ol class="breadcrumb">
                @if(getCurrentControllerName()=='Index')
                    <li><a href="{{url('/')}}">主页</a></li>
                @elseif(getCurrentControllerName()=='Goods')
                    <li><a href="{{url('goods/index')}}">商品管理</a></li>
                    @if(getCurrentMethodName()=='getIndex')
                        <li><span>全部商品</span></li>
                    @elseif(getCurrentMethodName()=='anyAdd')
                        <li><span>添加商品</span></li>
                    @elseif(getCurrentMethodName()=='anyEdit')
                        <li><span>编辑商品</span></li>
                    @elseif(getCurrentMethodName()=='getNotActive')
                        <li><span>下架商品</span></li>
                    @endif
                @elseif(getCurrentControllerName()=='Order')
                    <li><a href="{{url('order/index')}}">订单管理</a></li>
                @elseif(getCurrentControllerName()=='Wechat')
                    <li><a href="{{url('wechat/menu')}}?type=service">公众号管理</a></li>
                    @if(getCurrentMethodName()=='getMenu')
                        <li><span>菜单列表</span></li>
                    @elseif(getCurrentMethodName()=='anyAddMenu')
                        <li><span>添加菜单</span></li>
                    @elseif(getCurrentMethodName()=='anyMenEudit')
                        <li><span>编辑菜单</span></li>
                    @endif
                @elseif(getCurrentControllerName()=='Operator')
                    <li><a href="{{url('operator/index')}}">系统管理</a></li>
                    @if(getCurrentMethodName()=='getIndex')
                        <li><span>管理员列表</span></li>
                    @elseif(getCurrentMethodName()=='getRoleIndex')
                        <li><span>角色管理</span></li>
                    @elseif(getCurrentMethodName()=='anyCreate')
                        <li><span>添加用户</span></li>
                    @elseif(getCurrentMethodName()=='anyEdit')
                        <li><span>编辑用户</span></li>
                    @elseif(getCurrentMethodName()=='getIndex')
                        <li><span>角色管理</span></li>
                    @elseif(getCurrentMethodName()=='anyRoleCreate')
                        <li><span>添加角色</span></li>
                    @elseif(getCurrentMethodName()=='anyRoleEdit')
                        <li><span>编辑角色</span></li>
                    @endif
                @endif
            </ol>
        </div>
        <div class="row" id="content-main">
            @yield('content')
        </div>
        <div class="footer">
            <div class="pull-right">&copy; 2016-2017 <a href="#" target="_blank">zihan's blog</a>
            </div>
        </div>
    </div>
    <!--右侧部分结束-->
</div>
<script src="{{ elixir('admin/js/app.js') }}"></script>
<script>
    $(".i-checks").iCheck({
        checkboxClass:"icheckbox_square-green",
        radioClass:"iradio_square-green"
    });
</script>
@yield('footer_assets')
</body>
</html>
