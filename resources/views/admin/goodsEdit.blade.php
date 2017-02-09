@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 编辑商品')

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
                                <input id="name" name="goods_name" value="{{$datas->goods_name}}" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">售价(元)</label>
                            <div class="col-sm-10 col-md-5">
                                <input id="price" name="price" value="{{$datas->price}}" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">成本价(元)</label>
                            <div class="col-sm-10 col-md-5">
                                <input id="cost_price" name="cost_price" value="{{$datas->price}}" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">是否上架</label>
                            <div class="col-sm-10 col-md-5">
                                <div class="radio i-checks">
                                    <label>
                                        <input class="shown" type="radio" @if($datas->shown==1)checked="" @endif value="1" name="shown"> <i></i>是</label>
                                </div>
                                <div class="radio i-checks">
                                    <label>
                                        <input class="shown" type="radio" @if($datas->shown==0)checked="" @endif value="0" name="shown"> <i></i>否</label>
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
                                    @foreach($datas->pic as $k=>$value)
                                    <div class="file-item thumbnail upload-state-done">
                                        <input class="edit_pic" onchange="previewImage(this,'prv')" type="file" name="edit_pic">
                                        <img class="prv" src="{{$value->pic}}">
                                        <input class="edit_pic_id" type="hidden" value="{{$value->id}}">
                                        <div class="info">上传成功！</div>
                                        <a href="javascript:void(0);" class="cancel fa fa-close"></a>
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">商品详情</label>
                            <div class="col-sm-8">
                                <script id="container" style="width:100%;" type="text/plain">{!! $datas->content !!}</script>
                            </div>
                        </div>
                        <input name="goods_id" type="hidden" value="{{$datas->id}}">
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
            console.log(file);
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
                swal({text:'您选择了重复的图片！',timer:2000,showConfirmButton:false});
            }
        };
        // 完成上传完了，成功或者失败。
        uploader.on( 'uploadComplete', function( file ) {
            $(".cancel").click(function () {
                var this_ = $(this);
                swal({
                    text: '是否确定删除？删除后将无法回复！',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '是',
                    cancelButtonText: '否'
                }).then(function (i) {
                    if(i==true){
                        var e = this_.parent().attr('id');
                        uploader.removeFile(e,true);
                        $("#pics").find('#'+e+'_input').remove();
                        this_.parent().remove();
                        swal({text:"删除成功！", type:"success",timer:2000,showConfirmButton:false});
                    }
                });
            });
        });
        //删除已有的图片
        $(".cancel").click(function () {
            var this_ = $(this);
            var pic_id = this_.siblings('.edit_pic_id').val();
            swal({
                text: '是否确定删除？删除后将无法回复！',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: '是',
                cancelButtonText: '否'
            }).then(function (i) {
                if(i==true){
                    $.ajax({
                        type:'post',
                        url:'{{url('goods/deletepic')}}',
                        data:{'pic_id':pic_id,_token:'{{csrf_token()}}'},
                        success:function(data){
                            swal.close();
                            if(data.msg_type==200){
                                this_.parent().remove();
                                swal({text:"删除成功！", type:"success",timer:2000,showConfirmButton:false});
                            }else{
                                swal({text:data.msg, type:"error",timer:2000,showConfirmButton:false});
                            }
                        }
                    });
                }
            });
        });
        //修改图片
        function previewImage(file, prv) {
            /* file：file控件
             * prvid: 图片预览容器
             */
            var tip = "上传图片的格式不对"; // 设定提示信息
            var filters = {
                "jpeg": "/9j/4",
                "gif": "R0lGOD",
                "png": "iVBORw"
            }
            var prvbox = $(file).next('.prc');
            if (window.FileReader) { // html5方案
                for (var i = 0, f; f = file.files[i]; i++) {
                    var fr = new FileReader();
                    fr.onload = function (e) {
                        var src = e.target.result;
                        if (!validateImg(src)) {
                            swal({text:tip,timer:2000,showConfirmButton:false});
                        } else {
                            showPrvImg(src);
                        }
                    }
                    fr.readAsDataURL(f);
                }
            } else { // 降级处理
                if (!/\.jpg$|\.png$|\.gif$/i.test(file.value)) {
                    swal({text:tip,timer:2000,showConfirmButton:false});
                } else {
                    showPrvImg(file.value);
                }
            }
            function validateImg(data) {
                var pos = data.indexOf(",") + 1;
                for (var e in filters) {
                    if (data.indexOf(filters[e]) === pos) {
                        return e;
                    }
                }
                return null;
            }

            function showPrvImg(src) {
                swal({text:'加载中...',showConfirmButton:false});
                prvbox.src = src;
                var edit_pic_id = $(file).parent().children('.edit_pic_id').val();
                $.ajax({
                 type:'post',
                 url:'{{url('goods/editpic')}}',
                 data:{'edit_pic':src,'edit_pic_id':edit_pic_id,_token:'{{csrf_token()}}'},
                 success:function(data){
                     swal.close();
                     if(data.msg_type==200){
                         $(file).next().attr('src',data.data);
                         swal({text:'修改图片成功！',type:'success',timer:2000,showConfirmButton:false});
                     }
                 }
                 });
            }
        }
        //
        $("#from_btn").click(function () {
            var name = $("#name").val();
            var price = $("#price").val();
            var cost_price = $("#cost_price").val();
            var shown = $(".goods_form input[name=shown]:checked").val();
            var pics = $(".file-item").size();
            var content = ue.getContent();
            if(name.length<=0){
                swal({text:'请输入商品名称！',timer:2000,showConfirmButton:false});
            }else if(price.length<=0){
                swal({text:'请输入商品售价！',timer:2000,showConfirmButton:false});
            }else if(cost_price.length<=0){
                swal({text:'请输入商品成本价！',timer:2000,showConfirmButton:false});
            }else if(pics<=0){
                swal({text:'请添加商品图！',timer:2000,showConfirmButton:false});
            }else if(content.length<=0){
                swal({text:'请输入商品详情！',timer:2000,showConfirmButton:false});
            }else{
                swal({text:'资料提交中...',showConfirmButton:false});
                $.ajax({
                    type:'post',
                    url:'{{url('goods/edit')}}',
                    data:$(".goods_form").serialize(),
                    success:function(data){
                        if(data.msg_type==200){
                            swal({text:'修改成功！',type:'success',timer:2000,showConfirmButton:false}).then(function () {
                                window.location.href="{{url('goods/index')}}";
                            });
                        }else{
                            swal({text:data.msg,type:'error',timer:2000,showConfirmButton:false});
                        }
                    }
                });
            }


        });
    </script>
@endsection