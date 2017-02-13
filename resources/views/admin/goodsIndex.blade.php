@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 全部商品')

@section('header_assets')
@endsection

@section('content')
    <div class="row goods">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>全部商品 <small></small></h5>
                </div>
                <div class="ibox-content clearfix">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>商品名称</th>
                            <th>售价</th>
                            <th>成本价</th>
                            <th>添加时间</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        @forelse($goods as $good)
                        <tr>
                            <td class="hidden_id">{{ $good->id }}</td>
                            <td>{{ $good->goods_name }}</td>
                            <td>{{ $good->price }}</td>
                            <td>{{ $good->cost_price }}</td>
                            <td>{{ date('Y:m:d H:i:s',$good->add_time) }}</td>
                            <td>@if($good->shown==1) <span class="green_color">已上架</span> @else <span class="red_color">已下架</span> @endif</td>
                            <td><a class="shop_ban frozen">下架</a><span class="shuxian">|</span><a class="shop_edit" href="{{ url('goods/edit') }}?goods_id={{$good->id}}">编辑</a><span class="shuxian">|</span><a class="shop_delete" href="#">删除</a></td>
                        </tr>
                        @empty
                        <td colspan="12" align="center">暂无记录</td>
                        @endforelse
                        </tbody>
                    </table>
                    {!! $goods->links() !!}
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')
<script>
    $(".frozen").click(function () {
        var _this = $(this);
        var id = _this.parents('td').find('input').val();

        $.get('{{url('goods/frozen')}}?id=' + id + '', function (data) {
            if (data.msg_type == 200) {
                _this.parents('tr').remove();
                swal({text: "下架成功", type: "success", timer: 2000, showConfirmButton: false});
            } else {
                swal({text: data.msg, type: "error", timer: 2000, showConfirmButton: false});
            }
        });
    });
</script>
@endsection