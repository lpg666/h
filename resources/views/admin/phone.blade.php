<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <!--[if lt IE 9]>
    <meta http-equiv="refresh" content="0;ie.html" />
    <![endif]-->
</head>

<body>
    <form method="post" action="">
        <div>
            机型：
            <label>iPhone 6s：<input type="radio" name="model" value="1"></label>
            <label>iPhone 6s Plus：<input type="radio" name="model" value="2"></label>
        </div>
        <div>
            外观：
            <label>银色：<input type="radio" name="color" value="1"></label>
            <label>金色：<input type="radio" name="color" value="2"></label>
            <label>深空灰色：<input type="radio" name="color" value="3"></label>
            <label>玫瑰金色：<input type="radio" name="color" value="4"></label>
        </div>
        <div>
            容量：
            <label>32G<input type="radio" name="capacity" value="1"></label>
            <label>128G<input type="radio" name="capacity" value="2"></label>
        </div>

        <input type="text" name="phone" value="15519881999">
        <input type="text" name="name" value="有钱人">
        <input type="text" name="address" value="深圳市">

        <textarea name="remarks">评论</textarea>

        {!! csrf_field() !!}

        <button type="submit">提交</button>
    </form>
<script src="{{ elixir('admin/js/app.js') }}"></script>
<script>

</script>
</body>
</html>
