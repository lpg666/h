@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 角色管理')

@section('header_assets')
@endsection

@section('content')
    <div class="row operator">
        <form class="form col-sm-10 col-sm-10 col-lg-8" action="" method="get">
            <div class="label-h control-label pull-left">名称：</div>
            <div class="form_input"><input class="form-control" type="name" name="name"></div>
            <button type="button" class="btn btn-primary search">搜索</button>
            <button type="button" class="btn btn-default reset" onclick="location.href='?'">重置</button>
            <a class="add_role btn btn-primary" href="{{ url('operator-role/create') }}"><i class="fa fa-plus"></i> 添加角色</a>
        </form>
    </div>
    <div class="row">
        <div class="col-sm-10 col-sm-10 col-lg-8">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>角色列表 <small></small></h5>
                </div>
                <div class="ibox-content">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>名称</th>
                            <th>更改时间</th>
                            <th>添加时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($datas as $data)
                        <tr>
                            <td>{{$data->id}}</td>
                            <td>{{$data->name}}</td>
                            <td>{{$data->updated_at}}</td>
                            <td>{{$data->created_at}}</td>
                            <td><a href="#">编辑</a><span class="shuxian">|</span><a href="#">删除</a></td>
                        </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')

@endsection