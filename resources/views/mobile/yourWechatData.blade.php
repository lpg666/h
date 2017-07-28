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
    <style>

    </style>
</head>

<body>
    <div class="text" style="width: 200px; height: 200px; border: 1px solid #000;">aaaaaa</div>
    <input type="text" autofocus="true" class="pin_text">
</body>
</html>
<script>
    $.ajax({
        type:'get',
        url:'http://api.lpg6.xyz/v1/order/index',
        data:{'id':1},
        success:function (data) {
            alert(data);
        }
    });

    window.addEventListener('load', function() {
        var textInput = document.querySelector('.pin_text');

        FastClick.attach(document.body);
        Array.prototype.forEach.call(document.getElementsByClassName('test'), function(testEl) {
            testEl.addEventListener('click', function() {
                textInput.focus();
            }, false)
        });
    }, false);
</script>