<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>12</title>
    <link rel="stylesheet" href="{{ elixir('mobile/css/app.css') }}">
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript" src="{{asset('mobile/js/jquery-1.8.3.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('mobile/js/fastclick.js')}}"></script>
    <script type="text/javascript" src="{{asset('mobile/js/canvas2d.js')}}"></script>
    <script type="text/javascript" src="{{asset('mobile/js/GuaGuaLe2.js')}}"></script>
    <style>
        body
        {
            background: url("s_bd.jpg") repeat 0 0;
        }
        .container
        {
            position: relative;
            width: 400px;
            height: 160px;
            margin: 100px auto 0;
            background: url(s_title.png) no-repeat 0 0;
            background-size: 100% 100%;
        }
        #front, #back
        {
            position: absolute;
            width: 200px;
            left: 50%;
            top: 100%;
            margin-left: -130px;
            height: 80px;
            border-radius: 5px;
            border: 1px solid #444;
        }
    </style>
    <script>
        wx.config({!! \App\Services\WechatCustom::jssdk('service') !!});
        var share_info = {
            title: "a",
            desc: "b",
            imgUrl: "",
            link: "{{request()->fullUrl()}}"
        };
        var timeline_share_info = {
            title: "a",
            desc: "b",
            imgUrl: "",
            link: "{{request()->fullUrl()}}"
        };
        wx.ready(function(){
            wx.onMenuShareWeibo(share_info);
            wx.onMenuShareAppMessage(share_info);
            wx.onMenuShareQQ(share_info);
            wx.onMenuShareTimeline(timeline_share_info);
        });
    </script>
</head>

<body>
    <div class="container">
        <canvas id="back" width="200" height="80"></canvas>
        <canvas id="front" width="200" height="80"></canvas>
    </div>
</body>
</html>
<script>
    FastClick.attach(document.body);
    var guaguale = new GuaGuaLe("front", "back");
    guaguale.init({msg: "￥5000000.00"});
</script>