@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 全部商品')

@section('header_assets')
    <script>window.UMEDITOR_HOME_URL="/admin/umeditor/";</script>
    <style>
        .checkbox label, .radio label{padding-left: 0;}
        .ibox{ margin-bottom: 0;}
        #container{ width: 100%; height: 400px;}
    </style>
@endsection

@section('content')
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>上架商品 <small></small></h5>
                </div>
                <div class="ibox-content">
                    <form action="" class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">商品名称</label>
                            <div class="col-sm-10 col-md-5">
                                <input name="name" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">售价(元)</label>
                            <div class="col-sm-10 col-md-5">
                                <input name="price" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">成本价(元)</label>
                            <div class="col-sm-10 col-md-5">
                                <input name="cost_price" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">是否上架</label>
                            <div class="col-sm-10 col-md-5">
                                <div class="radio i-checks">
                                    <label>
                                        <input type="radio" checked="" value="1" name="shown"> <i></i>是</label>
                                </div>
                                <div class="radio i-checks">
                                    <label>
                                        <input type="radio" value="0" name="shown"> <i></i>否</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">商品图</label>
                            <div class="col-sm-8">
                                <div id="uploader">
                                    <div id="fileList" class="uploader-list"></div>
                                    <div id="filePicker"></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">商品详情</label>
                            <div class="col-sm-8">
                                <script id="container" type="text/plain">这里写你的初始化内容</script>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')
    <script>
        var um = UM.getEditor('container');
        um.setWidth("100%");
        //
        var uploader = WebUploader.create({
            formData: {
                _token:'{{csrf_token()}}'
            },
            paste: '#uploader',
            // 选完文件后，是否自动上传。
            auto: false,
            // swf文件路径
            swf:'{{url('admin/js/Uploader.swf')}}',
            // 文件接收服务端。
            server: 'http://webuploader.duapp.com/server/fileupload.php',
            method:'POST',
            // 选择文件的按钮。可选。
            pick: {
                id: '#filePicker',
                label: '点击选择图片'
            },
            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/jpeg,image/jpg,image/png,image/bmp'
            },
            resize: true,
            thumb:{
                quality: 80,
                type:'image/jpeg'
            },
            compress:{
                type:'image/jpeg',
                quality: 20,
                preserveHeaders: true,
                crop: false
            },
            // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
            disableGlobalDnd: true,
            fileNumLimit: 30
        });
    </script>
@endsection