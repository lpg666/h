<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>H+ 后台主题UI框架 - 登录</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="shortcut icon" href="/admin/img/favicon.ico">
    <link rel="stylesheet" href="{{ elixir('admin/css/all.css') }}">
    <!--[if lt IE 9]>
    <meta http-equiv="refresh" content="0;ie.html" />
    <![endif]-->
    <script>if(window.top !== window.self){ window.top.location = window.location;}</script>
</head>

<body class="gray-bg">

<div class="middle-box text-center loginscreen  animated fadeInDown">
    <div>
        <div>
            <h1 class="logo-name">H+</h1>
        </div>
        <h3>欢迎使用 H+</h3>

        <form class="m-t" role="form" action="">
            <div class="form-group">
                <input type="text" name="name" class="name form-control" placeholder="用户名">
            </div>
            <div class="form-group">
                <input type="password" name="password" class="pass form-control" placeholder="密码">
            </div>
            {!! csrf_field() !!}
            <button type="button" class="btn btn-primary block full-width m-b">登 录</button>
            <p class="text-muted text-center">
                {{--<a href="login.html#"><small>忘记密码了？</small></a> | --}}<a href="{{url('auth/register')}}">注册一个新账号</a>
            </p>

        </form>
    </div>
</div>
<script src="{{ elixir('admin/js/app.js') }}"></script>
<script>
    $(".btn").click(function () {
        if($(".name").val().length<=0){
            alert('用户名不能为空！');
        }else if($(".pass").val().length<=0){
            alert('密码不能为空！');
        }else{
            $.ajax({
                type:'post',
                url:'{{url('auth/login')}}',
                data: $('.m-t').serialize(),
                dataType:'json',
                success: function(data){
                    if(data.msg_type==1){
                        alert(data.msg);
                        location.href='{{$referer}}';
                    }else if(data.msg_type==-1){
                        alert(data.msg);
                    }else if(data.msg_type==-2){
                        alert(data.msg);
                    }
                },
                error: function(request) {}
            });
        }
    });
</script>
</body>
</html>
