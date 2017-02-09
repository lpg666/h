@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 主页')

@section('header_assets')
@endsection

@section('content')
<div class="operator">
    <div class="row">
        <form class="col-sm-12 form" action="" method="get">
            <div class="label-h control-label pull-left">账号：</div>
            <div class="form_input"><input class="form-control" type="name"></div>

            <span class="label-h control-label pull-left">真实姓名：</span>
            <div class="form_input"><input class="form-control" type="real_name"></div>
            <span class="label-h control-label pull-left">角色：</span>
            <div class="form_input">
                <select class="form-control">
                    <option>请选择</option>
                    @foreach(\App\Model\OperatorRole::all() as $operatorRole)
                    <option>{{ $operatorRole->name }}</option>
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
                        {{--@foreach($lists as $list)
                            <tr>
                                <td>{{$list->id}}</td>
                                <td>{{$list->name}}</td>
                                <td>{{$list->real_name}}</td>
                                <td>{{$list->role}}</td>
                                <td><a href="{{url('operator-role/edit')}}?id={{$list->id}}">编辑</a><span class="shuxian">|</span><a href="{{url('operator-role/destroy')}}?id={{$list->id}}">删除</a></td>
                            </tr>
                        @endforeach--}}
                        </tbody>
                    </table>
                    {{--{!! $lists->links() !!}--}}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('footer_assets')

@endsection