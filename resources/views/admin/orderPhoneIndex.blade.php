@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 手机订单')

@section('header_assets')
@endsection

@section('content')
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <p class="modal-title">订单信息</p>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-3">.col-md-4</div>
                        <div class="col-md-3">.col-md-4</div>
                        <div class="col-md-3">.col-md-4</div>
                        <div class="col-md-3">.col-md-4</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">.col-md-4</div>
                        <div class="col-md-4">.col-md-4</div>
                        <div class="col-md-4">.col-md-4</div>
                        <div class="col-md-4">.col-md-4</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="order">
        <div class="row">
            <form class="col-sm-12 form" action="" method="get">
                <div class="col-sm-12 no-padding">
                    <div class="col-sm-7 no-padding m-b">
                        <span class="label-h control-label pull-left">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                        <div class="form_input"><input class="form-control" type="text" name="name" value="{{ request()->get('name') }}"></div>
                        <div class="label-h control-label pull-left">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</div>
                        <div class="form_input"><input class="form-control" type="text" name="phone" value="{{ request()->get('phone') }}"></div>
                        <span class="label-h control-label pull-left">客服工号：</span>
                        <div class="form_input"><input class="form-control" type="text" name="user_id" value="{{ request()->get('user_id') }}"></div>
                        <span class="label-h control-label pull-left">快递单号：</span>
                        <div class="form_input"><input class="form-control" type="text" name="express_number" value="{{ request()->get('express_number') }}"></div>
                    </div>
                    <div class="col-sm-5 no-padding m-b">
                        <span class="label-h control-label pull-left">发货时间：</span>
                        <div class="form_input">
                            <div class="input-daterange input-group" id="datepicker1">
                                <input type="text" class="input-sm form-control" name="sendStart" value="{{request()->get('sendStart')}}" />
                                <span class="input-group-addon">到</span>
                                <input type="text" class="input-sm form-control" name="sendEnd" value="{{request()->get('sendEnd')}}" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-7 no-padding m-b">
                        <span class="label-h control-label pull-left">来&nbsp;源&nbsp;站&nbsp;：</span>
                        <div class="form_input"><input class="form-control" type="text" name="ip" value="{{ request()->get('ip') }}"></div>
                        <div class="label-h control-label pull-left">广&nbsp;告&nbsp;ID&nbsp;：</div>
                        <div class="form_input"><input class="form-control" type="text" name="ad_id" value="{{ request()->get('ad_id') }}"></div>
                        <span class="label-h control-label pull-left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span>
                        <div class="form_input"><input class="form-control" style="width: 380px;" type="text" name="address" value="{{ request()->get('address') }}"></div>
                    </div>
                    <div class="col-sm-5 no-padding m-b">
                        <span class="label-h control-label pull-left">下单时间：</span>
                        <div class="form_input">
                            <div class="input-daterange input-group" id="datepicker">
                                <input type="text" class="input-sm form-control" name="start" value="{{request()->get('start')}}" />
                                <span class="input-group-addon">到</span>
                                <input type="text" class="input-sm form-control" name="end" value="{{request()->get('end')}}" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-7 no-padding m-b">
                        <span class="label-h control-label pull-left">发货仓库：</span>
                        <div class="form_input">
                            <select class="form-control" name="depot_id">
                                <option value="">请选择</option>
                                @foreach(\App\Model\PhoneDepot::all() as $phoneDepot)
                                    <option value="{{$phoneDepot->id}}" @if(request()->get('depot_id') == $phoneDepot->id) selected="selected" @endif>{{ $phoneDepot->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <span class="label-h control-label pull-left">发货方式：</span>
                        <div class="form_input">
                            <select class="form-control" name="express_mode_id">
                                <option value="">请选择</option>
                                @foreach(\App\Model\ExpressMode::all() as $expressMode)
                                    <option value="{{$expressMode->id}}" @if(request()->get('express_mode_id') == $expressMode->id) selected="selected" @endif>{{ $expressMode->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <span class="label-h control-label pull-left">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：</span>
                        <div class="form_input">
                            <select class="form-control" name="state">
                                <option value="">请选择</option>
                                @foreach(\App\Model\PhoneOrderState::all() as $phoneOrderState)
                                    <option value="{{$phoneOrderState->id}}" @if(request()->get('state') == $phoneOrderState->id) selected="selected" @endif>{{ $phoneOrderState->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-5 no-padding m-b">
                        <span class="label-h control-label pull-left">签收时间：</span>
                        <div class="form_input">
                            <div class="input-daterange input-group" id="datepicker2">
                                <input type="text" class="input-sm form-control" name="signStart" value="{{request()->get('signStart')}}" />
                                <span class="input-group-addon">到</span>
                                <input type="text" class="input-sm form-control" name="signEnd" value="{{request()->get('signEnd')}}" />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary search">搜索</button>
                <button type="button" class="btn btn-default reset" onclick="location.href='?'">重置</button>
            </form>
        </div>
        <div class="row">
            <div class="col-sm-12 col-sm-12 col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>订单列表 <span>（共 {{$lists->total()}} 条）</span></h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>下定日期</th>
                                <th>发货日期</th>
                                <th>签收日期</th>
                                <th>回件日期</th>
                                <th>地址</th>
                                <th>姓名</th>
                                <th>联系电话</th>
                                <th>状态</th>
                                <th>跟单说明</th>
                                <th>锁定工号</th>
                                <th>快递单号</th>
                                <th>广告ID</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse($lists as $list)
                                <tr>
                                    <td>{{$list->id}}</td>
                                    <td>{{$list->created_at}}</td>
                                    <td>{{$list->send}}</td>
                                    <td>{{$list->sign}}</td>
                                    <td>{{$list->reply}}</td>
                                    <td>{{$list->address}}</td>
                                    <td>{{$list->name}}</td>
                                    <td>{{$list->phone}}</td>
                                    <td>{{$list->states->name}}</td>
                                    <td>{{$list->text}}</td>
                                    <td>{{$list->user_id}}</td>
                                    <td>{{$list->express_number}}</td>
                                    <td>{{$list->ad_id}}</td>
                                    <td><div class="btn_modal">编辑</div></td>
                                </tr>
                            @empty
                                <td colspan="14" align="center">暂无记录</td>
                            @endforelse
                            </tbody>
                        </table>
                        {!! with(new App\Services\PhonePresenter($lists->appends(request()->except('_token'))))->render() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')
    <script>
        $(".btn_modal").click(function () {
            $('#myModal').modal('toggle');
        });
        $("#datepicker,#datepicker1,#datepicker2").datepicker({
            keyboardNavigation: !1,
            forceParse: !1,
            autoclose: !0
        });
    </script>
@endsection