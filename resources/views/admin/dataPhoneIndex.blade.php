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
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: [],
                axisTick:{
                    alignWithLabel:false
                },
                axisLabel: {
                    formatter: '{value}'
                }
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
                console.log(data.data.day);
                myChart.setOption({
                    xAxis:  {
                        data:['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
                    },
                    series: [
                        {
                            name: '订单数',
                            data: data.data.ms
                        }
                    ]
                });
            }
        });
    </script>
@endsection