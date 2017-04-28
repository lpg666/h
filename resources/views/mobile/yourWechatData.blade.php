<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>12</title>
    <link rel="stylesheet" href="{{ elixir('mobile/css/app.css') }}">
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
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

</body>
</html>