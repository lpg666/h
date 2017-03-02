<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        @include('includes.docs.v1.head')
    </head>
    <body>

        <div class="container">
            <div class="row">
                <div class="col-3" id="sidebar">
                    <div class="column-content">
                        <div class="search-header">
                            <img src="/assets/docs/v1/img/f2m2_logo.svg" class="logo" alt="Logo" />
                            <input id="search" type="text" placeholder="Search">
                        </div>
                        <ul id="navigation">

                            <li><a href="#introduction">概要</a></li>

                            

                            <li>
                                <a href="#Order">Order</a>
                                <ul>
									<li><a href="#Order_Order">Order</a></li>
</ul>
                            </li>


                        </ul>
                    </div>
                </div>
                <div class="col-9" id="main-content">

                    <div class="column-content">

                        @include('includes.docs.v1.introduction')

                        <hr />

                                                

                                                <a href="#" class="waypoint" name="Order"></a>
                        <h2>Order</h2>
                        <p></p>

                        
                        <a href="#" class="waypoint" name="Order_Order"></a>
                        <div class="endpoint-header">
                            <ul>
                            <li><h2>GET</h2></li>
                            <li><h3>Order</h3></li>
                            <li>v1/order/index</li>
                          </ul>
                        </div>

                        <div>
                          <p class="endpoint-short-desc">订单详情</p>
                        </div>
                       <!--  <div class="parameter-header">
                             <p class="endpoint-long-desc"></p>
                        </div> -->
                        <form class="api-explorer-form" uri="v1/order/index" type="GET">
                          <div class="endpoint-paramenters">
                            <h4>参数列表</h4>
                            <ul>
                              <li class="parameter-header">
                                <div class="parameter-name">参数</div>
                                <div class="parameter-type">类型</div>
                                <div class="parameter-desc">描述</div>
                                <div class="parameter-value">取值</div>
                              </li>
                                                           <li>
                                <div class="parameter-name">id</div>
                                <div class="parameter-type">int</div>
                                <div class="parameter-desc">必填、订单id</div>
                                <div class="parameter-value">
                                    <input type="text" class="parameter-value-text" name="id">
                                </div>
                              </li>

                            </ul>
                          </div>
                           <div class="generate-response" >
                              <!-- <input type="hidden" name="_method" value="GET"> -->
                              <input type="submit" class="generate-response-btn" value="查看结果">
                          </div>
                        </form>
                        <hr>


                    </div>
                </div>
            </div>
        </div>


    </body>
</html>
