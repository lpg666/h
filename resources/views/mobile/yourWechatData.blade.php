<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ elixir('mobile/css/app.css') }}">
    <title>1</title>
    <style>
        .webuploader-element-invisible{position: relative; width: 500px; height: 200px;  background: #000;}
    </style>
</head>

<body>
    <div id="uploader-demo">
        <!--用来存放item-->
        <div id="fileList" class="uploader-list"></div>
        <div id="filePicker">1</div>
    </div>

    <input type="file">
<script src="/mobile/js/jquery-1.8.3.min.js"></script>
<script src="/mobile/js/webuploader.min.js"></script>
<script>
    // 初始化Web Uploader
    var uploader = WebUploader.create({
        // 选完文件后，是否自动上传。
        auto: true,
        // 文件接收服务端。
        server: '?',
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#filePicker'
    });
</script>
</body>
</html>