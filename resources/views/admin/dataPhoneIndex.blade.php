@extends('admin._layouts.layouts')

@section('page_title', 'H+ 后台主题UI框架 - 手机数据')

@section('header_assets')
@endsection

@section('content')
    <div class="row data">
        <div class="col-sm-12 col-sm-12 col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>刷新</h5>
                </div>
                <div class="ibox-content clearfix">
                    <div id="chart-panel"></div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_assets')
    <script>
        var myChart = echarts.init(document.getElementById('chart-panel'));
        myChart.setOption({
            title: {
                text: '订单曲线图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['订单数','签收数']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                name: '天',
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                name: '条',
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'订单数',
                    type:'line',
                    data:[],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'签收数',
                    type:'line',
                    data:[],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        });
        window.onresize = function(){
            myChart.resize();
        }
        $.ajax({
            url:'?',
            type:'post',
            data:{'_token':'{{ csrf_token() }}'},
            success:function(data){
                console.log(1);
                myChart.setOption({
                    xAxis: {
                        data:['02-11','02-12','02-13','02-14','02-15','02-16','02-17'].map(function (str) {
                            return str.replace(' ', '\n')
                        })
                    },
                    series: [
                        {
                            name: '订单数',
                            data: [2, 3, 4, 5, 6, 7, 8]
                        },
                        {
                            name: '签收数',
                            data: [1, 2, 3, 4, 5, 6, 7]
                        }
                    ]
                });
            }
        });
    </script>
@endsection