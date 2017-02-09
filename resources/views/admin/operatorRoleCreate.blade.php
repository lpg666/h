@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 添加角色')

@section('header_assets')
@endsection

@section('content')
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>添加角色 <small></small></h5>
                </div>
                <div class="ibox-content">
                    <form action="" method="post" class="roleCreate_form form-horizontal" >
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">名称:</label>
                            <div class="col-sm-10 col-md-3">
                                <input id="name" name="goods_name" value="1" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">菜单权限:</label>
                            <div class="col-sm-10 col-md-9">
                                @foreach (config('permission.menus') as $menu)
                                <p class="col-sm-12 no-padding m-t">
                                    @foreach($menu as $k=>$sub_menu)
                                    <label><input type="checkbox" name="menus[]" value="{{$k}}">{{$sub_menu['desc']}}</label>
                                    @endforeach
                                </p>
                                @endforeach
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label">操作权限:</label>
                            <div class="col-sm-10 col-md-3">
                                <p class="col-sm-12 no-padding m-t">
                                @foreach (config('permission.operations') as $k=>$operation)
                                    <label><input type="checkbox" name="operations[]" value="{{$k}}">{{$operation}}</label>
                                @endforeach
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 col-md-2 control-label hide_sm"></label>
                            <button id="from_btn" class="btn btn-primary">提交</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')

@endsection