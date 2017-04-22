@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 公众号管理')

@section('header_assets')
    <style>
        textarea{resize: vertical;}
        .url,.key,.media,.reply{ display: none;}
    </style>
@endsection

@section('content')
    <div class="row goods">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>添加菜单 <small></small></h5>
                </div>
                <div class="ibox-content">
                    <form action="" method="post" class="wechatMenu_form form-horizontal" >
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">上级菜单:</label>
                            <div class="col-sm-10 col-md-2">
                                <input class="menu_size" type="hidden" value="{{$data->count()}}">
                                <select class="form-control" name="parent_id">
                                    <option value="">请选择</option>
                                    @foreach($data as $v)
                                    <option value="{{$v->id}}">{{$v->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">菜单名称:</label>
                            <div class="col-sm-10 col-md-2">
                                <input class="form-control" name="name" type="text" value="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">账号类型:</label>
                            <div class="col-sm-10 col-md-9">
                                <p class="col-sm-12 no-padding m-t">
                                    <label class="i-checks"><input type="radio" name="account" value="service" @if(request()->get('type') == 'service') checked @endif>服务号</label>
                                    <label class="i-checks"><input type="radio" name="account" value="subscribe" @if(request()->get('type') == 'subscribe') checked @endif>订阅号</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">菜单类型:</label>
                            <div class="col-sm-10 col-md-2">
                                <select class="type_select form-control" name="type">
                                    <option value="">请选择</option>
                                    <option value="view">view</option>
                                    <option value="click">click</option>
                                    <option value="media_id">素材</option>
                                </select>
                            </div>
                        </div>
                        <div class="url form-group">
                            <label class="col-sm-2 col-md-2 control-label">Url:</label>
                            <div class="col-sm-10 col-md-4">
                                <input class="form-control" type="text" name="url" placeholder="菜单类型为view时必填">
                            </div>
                        </div>
                        <div class="key form-group">
                            <label class="col-sm-2 col-md-2 control-label">Key:</label>
                            <div class="col-sm-10 col-md-4">
                                <input class="form-control" type="text" name="key" placeholder="菜单类型为click时必填">
                            </div>
                        </div>
                        <div class="reply form-group">
                            <label class="col-sm-2 col-md-2 control-label">回复内容:</label>
                            <div class="col-sm-10 col-md-4">
                                <textarea class="form-control" name="reply" placeholder="菜单类型为click时必填"></textarea>
                            </div>
                        </div>
                        <div class="media form-group">
                            <label class="col-sm-2 col-md-2 control-label">素材id:</label>
                            <div class="col-sm-10 col-md-4">
                                <input class="form-control" type="text" name="media_id" placeholder="菜单类型为素材时必填">
                            </div>
                        </div>
                        {!! csrf_field() !!}
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label hide_sm"></label>
                            <div style="margin-left: 15px;" id="from_btn" class="btn btn-primary">提交</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')
<script>
    $(".type_select").change(function () {
        var type = $(this).val();
        if(type == 'view'){
            $(".url").show();
            $(".key,.reply,.media").val('').hide();
        }else if(type == 'click'){
            $(".key,.reply").show();
            $(".url,.media").val('').hide();
        }else if(type == 'media_id'){
            $(".media").show();
            $(".key,.reply,.url").val('').hide();
        }
    });
    $("#from_btn").click(function () {
        var parent_id = $("[name='parent_id']").val();
        var menu_size = $(".menu_size").val();
        var name = $("[name='name']").val();
        var type = $("[name='type']").val();
        var url = $("[name='url']").val();
        var key = $("[name='key']").val();
        var reply = $("[name='reply']").val();
        var media_id = $("[name='media_id']").val();

        if(parent_id =='' && menu_size == 3){
            swal({text:'一级菜单最多为3，如果要添加二级菜单，<br/>请选择上级菜单,否则请删除一级菜单',type:'error',timer:2000,showConfirmButton:false});
        }else if(name.length <=0){
            swal({text:'菜单名称不能为空',type:'error',timer:2000,showConfirmButton:false});
        }else if(type ==''){
            swal({text:'菜单类型必填',type:'error',timer:2000,showConfirmButton:false});
        }else if(type =='view' && url==''){
            swal({text:'Url不能为空',type:'error',timer:2000,showConfirmButton:false});
        }else if(type =='click' && (key==''|| reply=='')){
            swal({text:'Key和回复内容不能为空',type:'error',timer:2000,showConfirmButton:false});
        }else if(type =='media_id' && media_id ==''){
            swal({text:'素材id不能为空',type:'error',timer:2000,showConfirmButton:false});
        }else{
            $.post('{{url('wechat/addmenu')}}',$(".wechatMenu_form").serialize(),function (data) {
                if (data.msg_type == 200) {
                    swal({text: "添加成功", type: "success", timer: 2000, showConfirmButton: false}).then(function () {
                        window.location.href="{{url('wechat/menu')}}?type={{request()->get('type')}}";
                    });
                } else {
                    swal({text: data.msg, type: "error", timer: 2000, showConfirmButton: false});
                }
            });
        }
    });
</script>
@endsection