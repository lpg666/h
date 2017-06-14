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
    <div id="comment_but">aaaaaa</div>
    <input autofocus="true" class="pin_text">
</body>
</html>
<script>
    window.addEventListener('load', function() {
        var textInput = document.querySelector('.pin_text');
        FastClick.attach(document.body);
        Array.prototype.forEach.call(document.getElementById('comment_but'), function(testEl) {
            testEl.addEventListener('click', function() {
                textInput.focus();
            }, false)
        });
    }, false);
</script>