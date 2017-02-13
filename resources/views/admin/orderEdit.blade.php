@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 编辑订单')

@section('header_assets')
@endsection

@section('content')
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>编辑订单 <small></small></h5>
                </div>
                <div class="ibox-content">
                    <form action="" method="post" class="order_form form-horizontal" >
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">姓名:</label>
                            <div class="col-sm-10 col-md-3 sp_zi no-padding">
                                {{$data->name}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">联系电话:</label>
                            <div class="col-sm-10 col-md-3 sp_zi no-padding">
                                {{$data->phone}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">地址:</label>
                            <div class="col-sm-10 col-md-3 sp_zi no-padding">
                                {{$data->address}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">机型:</label>
                            <div class="col-sm-10 col-md-3 sp_zi no-padding">
                                {{$data->models->name}}/{{$data->colors->name}}/{{$data->capacitys->capacity}}G
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">价格:</label>
                            <div class="col-sm-10 col-md-3 sp_zi no-padding">
                                {{$data->price}}元
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">下单时间:</label>
                            <div class="col-sm-10 col-md-3 sp_zi no-padding">
                                {{$data->created_at}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">状态:</label>
                            <div class="col-sm-10 col-md-10 radio_box no-padding">
                                <label class="i-checks"><input type="radio" name="state" value="1" @if($data->state==1) checked @endif><span>未处理</span></label>
                                <label class="i-checks"><input type="radio" name="state" value="2" @if($data->state==2) checked @endif><span>未发货</span></label>
                                <label class="i-checks"><input type="radio" name="state" value="3" @if($data->state==3) checked @endif><span>已发货</span></label>
                                <label class="i-checks"><input type="radio" name="state" value="4" @if($data->state==4) checked @endif><span>已签收</span></label>
                                <label class="i-checks"><input type="radio" name="state" value="5" @if($data->state==5) checked @endif><span>错误</span></label>
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
        $("#from_btn").click(function () {
            $.ajax({
                type:'post',
                url:'{{url('order/edit')}}?id={{$data->id}}&sorting_field={{request()->get('sorting_field')}}',
                data:$(".order_form").serialize(),
                success:function(data){
                    if(data.msg_type==200){
                        swal({text:'提交成功',type:'success',timer:2000,showConfirmButton:false}).then(function () {
                            window.location.href="{{url('order/index')}}?state="+data.data+"";
                        });
                    }
                }
            });
        });
    </script>
@endsection