@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 主页')

@section('header_assets')
@endsection

@section('content')
    <div class="row">
        <form class="col-sm-12" action="" method="get">
            <div class="label-h control-label pull-left">账号：</div>
            <div class="col-sm-2"><input class="form-control" type="name"></div>

            <span class="label-h control-label pull-left">真实姓名：</span>
            <div class="col-sm-2"><input class="form-control" type="real_name"></div>
            <span class="label-h control-label pull-left">角色：</span>
            <div class="col-sm-2">
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <button type="button" class="btn btn-primary">搜索</button>
        </form>
    </div>
@endsection

@section('footer_assets')

@endsection