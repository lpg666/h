@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 全部商品')

@section('header_assets')
@endsection

@section('content')
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">

                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>商品名称</th>
                            <th>售价</th>
                            <th>成本价</th>
                            <th>添加时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($goods as $good)
                        <tr>
                            <td>{{ $good->id }}</td>
                            <td>{{ $good->name }}</td>
                            <td>{{ $good->price }}</td>
                            <td>{{ $good->cost_price }}</td>
                            <td>{{ date('Y:m:d H:i:s',$good->add_time) }}</td>
                            <td>{{ $good->shown }}</td>
                        </tr>
                        @endforeach
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
@endsection

@section('footer_assets')

@endsection