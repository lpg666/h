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
                data:['订单数']
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
                type: 'time',
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
                var at = [];
                for (var i=0;i<data.data.length;i++){
                    at[i] = [data.data[i].last_time,1];
                }
                console.log(data,at);
                myChart.setOption({
                    xAxis:  {
                        data:['2017-02-13 00:00:00','2017-02-13 01:00:00','2017-02-13 02:00:00','2017-02-13 03:00:00','2017-02-13 04:00:00','2017-02-13 05:00:00','2017-02-13 06:00:00','2017-02-13 07:00:00','2017-02-13 08:00:00','2017-02-13 09:00:00','2017-02-13 10:00:00','2017-02-13 11:00:00','2017-02-13 12:00:00']
                    },
                    series: [
                        {
                            name: '订单数',
                            data: at
                        }
                    ]
                });
            }
        });
    </script>
@endsection