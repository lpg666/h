@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 公众号管理')

@section('header_assets')
    <style>
        .ibox-title{ padding-bottom: 0;}
        .nav-tabs{border-bottom: none;}
        .font_weight{font-weight: bold;}
    </style>
@endsection

@section('content')
    <div class="row goods">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <ul class="nav nav-tabs">
                        <li class="@if(request()->get('type') == 'service') active @endif"><a href="{{url('wechat/menu')}}?type=service">服务号</a></li>
                        <li class="@if(request()->get('type') == 'subscribe') active @endif"><a href="{{url('wechat/menu')}}?type=subscribe">订阅号</a></li>
                    </ul>
                </div>
                <div class="ibox-content clearfix">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>菜单名称</th>
                            <th>类型</th>
                            <th>Url</th>
                            <th>素材id</th>
                            <th>Key</th>
                            <th>回复内容</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if(!empty($lists) && !empty($lists[0]))
                            @foreach($lists[0] as $list)
                            <tr>
                                <td class="font_weight">{{ $list['name'] }}</td>
                                <td>{{ $list['type'] }}</td>
                                <td>{{ $list['url'] }}</td>
                                <td>{{ $list['media_id'] }}</td>
                                <td>{{ $list['key'] }}</td>
                                <td>{{ $list['reply'] }}</td>
                                <td><a class="menu_edit" href="{{ url('wechat/edit-menu') }}?menu_id={{$list['id']}}&type={{request()->get('type')}}">编辑</a><span class="shuxian">|</span><a class="menu_delete" data-a="{{ url('wechat/delete-menu',$list['id']) }}" href="javascript:void(0)">删除</a></td>
                            </tr>
                                @if(!empty($lists[$list['id']]))
                                    @foreach($lists[$list['id']] as $list2)
                                        <tr>
                                            <td>{{ $list2['name'] }}</td>
                                            <td>{{ $list2['type'] }}</td>
                                            <td>{{ $list2['url'] }}</td>
                                            <td>{{ $list2['media_id'] }}</td>
                                            <td>{{ $list2['key'] }}</td>
                                            <td>{{ $list2['reply'] }}</td>
                                            <td><a class="menu_edit" href="{{ url('wechat/edit-menu') }}?menu_id={{$list2['id']}}&type={{request()->get('type')}}">编辑</a><span class="shuxian">|</span><a class="menu_delete" data-a="{{ url('wechat/delete-menu',$list2['id']) }}" href="javascript:void(0)">删除</a></td>
                                        </tr>
                                    @endforeach
                                @endif
                            @endforeach
                        @else
                        <td colspan="12" align="center">暂无记录</td>
                        @endif
                        </tbody>
                    </table>
                    <div>
                        <a class="add_menu btn btn-primary" href="{{url('wechat/add-menu')}}?type={{request()->get('type')}}"><i class="fa fa-plus"></i> 添加菜单</a>
                        <a class="sync_menu btn btn-danger" href="{{url('wechat/sync-menu',request()->get('type'))}}">同步</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')
<script>
    $(".menu_delete").click(function () {
        var _this = $(this);
        var _src = $(this).attr('data-a');
        $.get(_src,function (data) {
            if (data.msg_type == 200) {
                _this.parents('tr').remove();
                swal({text: "删除成功", type: "success", timer: 2000, showConfirmButton: false});
            } else {
                swal({text: data.msg, type: "error", timer: 2000, showConfirmButton: false});
            }
        });
    });
</script>
@endsection