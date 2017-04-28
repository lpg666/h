<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>12</title>
    <link rel="stylesheet" href="{{ elixir('mobile/css/app.css') }}">
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <style>
        wx.config({!! \App\Services\WechatCustom::jssdk('service') !!});
        var share_info = {
            title: "",
            desc: '我公司正在参加“2016消费电子创新产品”评比，请您助我“一票”之力！',
            imgUrl: ',
            link: "{{request()->fullUrl()}}"
        }
        var timeline_share_info = {
            title: "",
            desc: "",
            imgUrl: '',
            link: "{{request()->fullUrl()}}"
        }
        wx.ready(function(){
            wx.onMenuShareWeibo(share_info);
            wx.onMenuShareAppMessage(share_info);
            wx.onMenuShareQQ(share_info);
            wx.onMenuShareTimeline(timeline_share_info);
        });
    </style>
</head>

<body>

</body>
</html>