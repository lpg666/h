<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>H+ 后台主题UI框架 - 注册</title>
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

<div class="middle-box text-center loginscreen   animated fadeInDown">
    <div>
        <div>

            <h1 class="logo-name">H+</h1>

        </div>
        <h3>欢迎注册 H+</h3>
        <p>创建一个H+新账户</p>
        <form class="m-t" role="form" action="">
            <div class="form-group">
                <input type="text" name="name" class="name form-control" placeholder="请输入用户名" required="">
            </div>
            <div class="form-group">
                <input type="password" name="password" class="pass form-control" placeholder="请输入密码" required="">
            </div>
            <div class="form-group">
                <input type="password" name="password1" class="pass1 form-control" placeholder="请再次输入密码" required="">
            </div>
            {{--<div class="form-group text-left">
                <div class="checkbox i-checks">
                    <label class="no-padding">
                        <input type="checkbox"><i></i> 我同意注册协议</label>
                </div>
            </div>--}}
            {!! csrf_field() !!}
            <button type="button" class="btn btn-primary block full-width m-b">注 册</button>

            <p class="text-muted text-center"><small>已经有账户了？</small><a href="{{url('auth/login')}}">点此登录</a>
            </p>

        </form>
    </div>
</div>
<script src="{{ elixir('admin/js/app.js') }}"></script>
<script>
    $(document).ready(function(){
        $(".i-checks").iCheck({
            checkboxClass:"icheckbox_square-green",
            radioClass:"iradio_square-green",
        });
        $(".btn").click(function () {
            if($(".name").val().length<=0){
                swal({text:'用户名不能为空！',timer:2000,showConfirmButton:false});
            }else if($(".pass").val().length<=0){
                swal({text:'密码不能为空！',timer:2000,showConfirmButton:false});
            }else if($(".pass1").val().length<=0){
                swal({text:'重复密码不能为空！',timer:2000,showConfirmButton:false});
            }else if($(".pass").val()!==$(".pass1").val()){
                swal({text:'两次输入的密码不一致！',timer:2000,showConfirmButton:false});
            }else{
                $.ajax({
                    type:'post',
                    url:'{{url('auth/register')}}',
                    data: $('.m-t').serialize(),
                    dataType:'json',
                    success: function(data){
                        if(data.msg_type==1){
                            swal({text:data.msg,type:'success',timer:2000,showConfirmButton:false}).then(function () {
                                location.href='{{$referer}}';
                            });
                        }else if(data.msg_type==0){
                            swal({text:data.msg,type:'error',timer:2000,showConfirmButton:false});
                        }
                    },
                    error: function(request) {}
                });
            }
        });
    });
</script>
</body>
</html>
