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
    FastClick.attach(document.body);
    var button = document.getElementById('comment_but');
    var inputElem = document.getElementsByClassName('pin_text')[0];
    button.addEventListener('click', function(){
        console.log(inputElem);
        inputElem.focus();
    });
</script>