@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 全部订单')

@section('header_assets')
@endsection

@section('content')
    <div class="order">
        <div class="row">
            <form class="col-sm-12 form" action="" method="get">
                <div class="col-sm-12 no-padding m-b">
                    <span class="label-h control-label pull-left">机型：</span>
                    <div class="form_input">
                        <select class="form-control" name="model">
                            <option value="">请选择</option>
                            @foreach(\App\Model\PhoneModel::all() as $phoneModel)
                                <option value="{{$phoneModel->id}}" @if(request()->get('model') == $phoneModel->id) selected="selected" @endif>{{ $phoneModel->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <span class="label-h control-label pull-left">状态：</span>
                    <div class="form_input">
                        <select class="form-control" name="state">
                            <option value="">请选择</option>
                            @foreach(\App\Model\PhoneOrderState::all() as $phoneOrderState)
                                <option value="{{$phoneOrderState->id}}" @if(request()->get('state') == $phoneOrderState->id) selected="selected" @endif>{{ $phoneOrderState->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <span class="label-h control-label pull-left">时间：</span>
                    <div class="form_input">
                        <div class="input-daterange input-group" id="datepicker">
                            <input type="text" class="input-sm form-control" name="start" value="{{request()->get('start')}}" />
                            <span class="input-group-addon">到</span>
                            <input type="text" class="input-sm form-control" name="end" value="{{request()->get('end')}}" />
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 no-padding m-b">
                    <span class="label-h control-label pull-left">姓名：</span>
                    <div class="form_input"><input class="form-control" type="text" name="name" value="{{ request()->get('name') }}"></div>
                    <div class="label-h control-label pull-left">电话：</div>
                    <div class="form_input"><input class="form-control" type="text" name="phone" value="{{ request()->get('phone') }}"></div>
                </div>
                <button type="submit" class="btn btn-primary search">搜索</button>
                <button type="button" class="btn btn-default reset" onclick="location.href='?'">重置</button>
            </form>
        </div>
        <div class="row">
            <div class="col-sm-12 col-sm-12 col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>订单列表 <span>（共 {{$lists->count()}} 条）</span></h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>姓名</th>
                                <th>联系电话</th>
                                <th>地址</th>
                                <th>机型</th>
                                <th>价格</th>
                                <th>下单时间</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse($lists as $list)
                                <tr>
                                    <td>{{$list->id}}</td>
                                    <td>{{$list->name}}</td>
                                    <td>{{$list->phone}}</td>
                                    <td>{{$list->address}}</td>
                                    <td>{{$list->models->name}}/{{$list->colors->name}}/{{$list->capacitys->capacity}}G</td>
                                    <td>{{$list->price}}</td>
                                    <td>{{$list->created_at}}</td>
                                    <td class="@if($list->state==1) red_color @elseif($list->state==2) yellow_color @elseif($list->state==3) blue_color @elseif($list->state==4) green_color @endif">{{$list->states->name}}</td>
                                    <td><a href="{{url('order/edit')}}?id={{$list->id}}&sorting_field={{request()->get('state')}}">编辑</a></td>
                                </tr>
                            @empty
                                <td colspan="12" align="center">暂无记录</td>
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
        $("#datepicker").datepicker({
            keyboardNavigation: !1,
            forceParse: !1,
            autoclose: !0
        });
    </script>
@endsection