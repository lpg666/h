@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 添加商品')

@section('header_assets')
    <style>
        .checkbox label, .radio label{padding-left: 0;}
        .ibox{ margin-bottom: 0;}
        #container{ width: 100%; height: auto; min-height: 400px;}
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
                    <form action="" method="post" class="goods_form form-horizontal" >
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">商品名称</label>
                            <div class="col-sm-10 col-md-5">
                                <input id="name" name="goods_name" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">售价(元)</label>
                            <div class="col-sm-10 col-md-5">
                                <input id="price" name="price" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">成本价(元)</label>
                            <div class="col-sm-10 col-md-5">
                                <input id="cost_price" name="cost_price" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">是否上架</label>
                            <div class="col-sm-10 col-md-5">
                                <div class="radio i-checks">
                                    <label>
                                        <input class="shown" type="radio" checked="" value="1" name="shown"> <i></i>是</label>
                                </div>
                                <div class="radio i-checks">
                                    <label>
                                        <input class="shown" type="radio" value="0" name="shown"> <i></i>否</label>
                                </div>
                            </div>
                        </div>
                        <div id="pics"></div>
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
                                <script id="container" style="width:100%;" type="text/plain">这里写你的初始化内容</script>
                            </div>
                        </div>
                        {!! csrf_field() !!}
                        <div id="from_btn" class="btn btn-primary">保存</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')
    @include('UEditor::head')
    <script>
        var ue = UE.getEditor('container');
        ue.ready(function() {
            ue.execCommand('serverparam', '_token', '{{ csrf_token() }}');
        });
        //
        var uploader = WebUploader.create({
            paste: '#uploader',
            // 选完文件后，是否自动上传。
            auto: true,
            // swf文件路径
            swf:'{{url('admin/js/Uploader.swf')}}',
            // 文件接收服务端。
            server: '{{url('goods/addpic')}}',
            formData: {
                _token:'{{csrf_token()}}'
            },
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
        //
        var $list = $("#uploader");    //盒子
        var $btn = $("#from_btn");
        var thumbnailWidth = .5;   //缩略图高度和宽度
        var thumbnailHeight = .5;
        // 当有文件添加进来的时候
        uploader.on( 'fileQueued', function( file ) {
            var $li = $(
                    '<div id="' + file.id + '" class="file-item thumbnail">' +
                    '<img>' +
                    '<div class="info"></div>' +
                    '<a href="javascript:void(0);" class="cancel fa fa-close"></a></div>'
                ),
                $img = $li.find('img');
            // $list为容器jQuery实例
            $list.append( $li );
            // 创建缩略图
            // 如果为非图片文件，可以不用调用此方法。
            // thumbnailWidth x thumbnailHeight 为 100 x 100
            uploader.makeThumb( file, function( error, src ) {
                if ( error ) {
                    $img.replaceWith('<span>不能预览</span>');
                    return;
                }
                $img.attr( 'src', src );
            }, thumbnailWidth, thumbnailHeight );
        });
        // 文件上传过程中创建进度条实时显示。
        uploader.on( 'uploadProgress', function( file, percentage ) {
            $( '#'+file.id ).addClass('upload-state-done').find('.info').text('上传中...'+ percentage * 100 + '%');
        });
        // 文件上传成功，给item添加成功class, 用样式标记上传成功。
        uploader.on( 'uploadSuccess', function( file,response ) {
            var input = '<input id="'+file.id+'_input" type="hidden" name="pics[]" value="'+response.data+'" /> ';
            $('#pics').append(input);
            $( '#'+file.id ).addClass('upload-state-done').find('.info').text('上传成功！');
        });
        // 文件上传失败，显示上传出错。
        uploader.on( 'uploadError', function( file ) {
            $( '#'+file.id ).find('.info').text('上传失败！').css('color','#ed5565');
        });
        // 文件上传重复。
        uploader.onError = function( code ) {
            if(code=='F_DUPLICATE'){
                alert('您选择了重复的图片！');
            }
        };
        // 完成上传完了，成功或者失败。
        uploader.on( 'uploadComplete', function( file ) {
            $(".cancel").click(function () {
                $(this).parent().remove();
                var i = $(this).parent().attr('id');
                uploader.removeFile(i,true);
                $("#pics").find('#'+i+'_input').remove();
            });
        });

        //
        var re = false;
        $("#from_btn").click(function () {
            var name = $("#name").val();
            var price = $("#price").val();
            var cost_price = $("#cost_price").val();
            var shown = $(".goods_form input[name=shown]:checked").val();
            var pics = $("#pics").find('input').size();
            var content = ue.getContent();
            if(name.length<=0){
                swal({text:'请输入商品名称',timer:2000,showConfirmButton:false});
            }else if(price.length<=0){
                swal({text:'请输入商品售价',timer:2000,showConfirmButton:false});
            }else if(cost_price.length<=0){
                swal({text:'请输入商品成本价',timer:2000,showConfirmButton:false});
            }else if(pics<=0){
                swal({text:'请添加商品图',timer:2000,showConfirmButton:false});
            }else if(content.length<=0){
                swal({text:'请输入商品详情',timer:2000,showConfirmButton:false});
            }else if(re == false){
                re = true;
                $.ajax({
                    type:'post',
                    url:'{{url('goods/add')}}',
                    data:$(".goods_form").serialize(),
                    success:function(data){
                        re = false;
                        swal({text:'保存成功',type:'success',timer:2000,showConfirmButton:false}).then(function () {
                            window.location.href="{{url('goods/index')}}?goods_id="+data+"";
                        });

                    }
                });
            }


        });
    </script>
@endsection