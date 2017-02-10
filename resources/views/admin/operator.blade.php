@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 管理员列表')

@section('header_assets')
@endsection

@section('content')
<div class="operator">
    <div class="row">
        <form class="col-sm-12 form" action="" method="get">
            <div class="label-h control-label pull-left">账号：</div>
            <div class="form_input"><input class="form-control" type="text" name="name" value="{{ request()->get('name') }}"></div>

            <span class="label-h control-label pull-left">真实姓名：</span>
            <div class="form_input"><input class="form-control" type="text" name="real_name" value="{{ request()->get('real_name') }}"></div>
            <span class="label-h control-label pull-left">角色：</span>
            <div class="form_input">
                <select class="form-control" name="role_id">
                    <option value="">请选择</option>
                    @foreach(\App\Model\OperatorRole::all() as $operatorRole)
                    <option value="{{$operatorRole->id}}" @if(request()->get('role_id') == $operatorRole->id) selected="selected" @endif>{{ $operatorRole->name }}</option>
                    @endforeach
                </select>
            </div>
            <button type="submit" class="btn btn-primary search">搜索</button>
            <button type="button" class="btn btn-default reset" onclick="location.href='?'">重置</button>
            <a class="add_user btn btn-primary" href="{{url('operator/create')}}"><i class="fa fa-plus"></i> 添加用户</a>
        </form>
    </div>
    <div class="row">
        <div class="col-sm-10 col-sm-10 col-lg-8">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>管理员列表 <small></small></h5>
                </div>
                <div class="ibox-content clearfix">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>账号</th>
                            <th>真实姓名</th>
                            <th>角色</th>
                            <th>Email</th>
                            <th>状态</th>
                            <th>登录次数</th>
                            <th>上次登录时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($lists as $list)
                            <tr>
                                <td>{{$list->id}}</td>
                                <td>{{$list->name}}</td>
                                <td>{{$list->real_name}}</td>
                                <td>@if($list->role) {{$list->role->name}} @endif</td>
                                <td>{{$list->email}}</td>
                                <td>@if($list->status ==1) 正常 @else 冻结 @endif</td>
                                <td>{{$list->logins}}</td>
                                <td>{{$list->last_time}}</td>
                                <td><a href="{{url('operator/edit')}}?id={{$list->id}}">编辑</a><span class="shuxian">|</span><a class="destroy">删除<input type="hidden" value="{{$list->id}}"></a></td>
                            </tr>
                        @empty
                            <tr class="col-lg-12">
                                <td colspan="12" align="center">暂无记录</td>
                            </tr>
                        @endforelse
                        </tbody>
                    </table>
                    {!! $lists->links() !!}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('footer_assets')
    <script>
        $(".destroy").click(function () {
            var _this = $(this);
            var id = _this.find('input').val();
            swal({
                text: '是否确定删除？删除后将无法回复！',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: '是',
                cancelButtonText: '否'
            }).then(function (i) {
                if(i==true) {
                    $.get('{{url('operator/destroy')}}?id=' + id + '', function (data) {
                        if (data.msg_type == 200) {
                            _this.parents('tr').remove();
                            swal({text: "删除成功！", type: "success", timer: 2000, showConfirmButton: false});
                        } else {
                            swal({text: data.msg, type: "error", timer: 2000, showConfirmButton: false});
                        }
                    });
                }
            });
        });
    </script>
@endsection