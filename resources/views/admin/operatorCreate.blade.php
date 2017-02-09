@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 添加用户')

@section('header_assets')
@endsection

@section('content')
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>添加用户 <small></small></h5>
                </div>
                <div class="ibox-content">
                    <form action="" method="post" class="roleCreate_form form-horizontal" >
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">账号:</label>
                            <div class="col-sm-10 col-md-3">
                                <input id="name" name="name" value="" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">真实姓名:</label>
                            <div class="col-sm-10 col-md-3">
                                <input id="real_name" name="real_name" value="" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">角色:</label>
                            <div class="col-sm-10 col-md-3">
                                <select id="role_id" class="form-control" name="role_id">
                                    <option value="">请选择</option>
                                    @foreach(\App\Model\OperatorRole::all() as $operator)
                                    <option value="{{$operator->id}}">{{$operator->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">Email:</label>
                            <div class="col-sm-10 col-md-3">
                                <input id="email" name="email" value="" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">状态:</label>
                            <div class="col-sm-10 col-md-3 radio_box">
                                <label class="i-checks"><input type="radio" name="status" value="1" checked><span>正常</span></label>
                                <label class="i-checks"><input type="radio" name="status" value="0"><span>冻结</span></label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">密码:</label>
                            <div class="col-sm-10 col-md-3">
                                <input id="pass" name="password" value="" type="password" class="form-control">
                            </div>
                        </div><div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">重复密码:</label>
                            <div class="col-sm-10 col-md-3">
                                <input id="pass_c" name="password_confirmation" value="" type="password" class="form-control">
                            </div>
                        </div>
                        {!! csrf_field() !!}
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label hide_sm"></label>
                            <div id="from_btn" class="btn btn-primary">提交</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')
    <script>
        $(".i-checks").iCheck({
            radioClass:"iradio_square-green"
        });
        $("#from_btn").click(function () {
            console.log($("#pass").val()==$("#pass_c").val());
            if($("#name").val().length<=0){
                swal({text:'账号不能为空！',type:'error',timer:2000,showConfirmButton:false});
            }else if($("#real_name").val().length<=0){
                swal({text:'真实姓名不能为空！',type:'error',timer:2000,showConfirmButton:false});
            }else if($("#role_id").val().length<=0){
                swal({text:'角色不能为空！',type:'error',timer:2000,showConfirmButton:false});
            }else if($("#email").val().length<=0){
                swal({text:'Email不能为空！',type:'error',timer:2000,showConfirmButton:false});
            }else if($("#pass").val().length<=0){
                swal({text:'密码不能为空！',type:'error',timer:2000,showConfirmButton:false});
            }else if($("#pass_c").val().length<=0){
                swal({text:'重复密码不能为空！',type:'error',timer:2000,showConfirmButton:false});
            }else if($("#pass").val() !== $("#pass_c").val()){
                swal({text:'两次密码不一致！',type:'error',timer:2000,showConfirmButton:false});
            }else{
                $.ajax({
                    type:'post',
                    url:'{{url('operator/create')}}',
                    data:$(".roleCreate_form").serialize(),
                    success:function(data){
                        swal({text:'添加成功！',type:'success',timer:2000,showConfirmButton:false}).then(function () {
                            window.location.href="{{url('operator/index')}}";
                        });

                    }
                });
            }
        });
    </script>
@endsection