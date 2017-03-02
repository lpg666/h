
                        <a href="#" class="waypoint" name="{column-name}_{function}"></a>
                        <div class="endpoint-header">
                            <ul>
                            <li><h2>{request-type}</h2></li>
                            <li><h3>{function}</h3></li>
                            <li>{request-uri}</li>
                          </ul>
                        </div>

                        <div>
                          <p class="endpoint-short-desc">{endpoint-short-description}</p>
                        </div>
                       <!--  <div class="parameter-header">
                             <p class="endpoint-long-desc">{endpoint-long-description}</p>
                        </div> -->
                        <form class="api-explorer-form" uri="{request-uri}" type="{request-type}">
                          <div class="endpoint-paramenters">
                            <h4>参数列表</h4>
                            <ul>
                              <li class="parameter-header">
                                <div class="parameter-name">参数</div>
                                <div class="parameter-type">类型</div>
                                <div class="parameter-desc">描述</div>
                                <div class="parameter-value">取值</div>
                              </li>
                              {request-parameters}
                            </ul>
                          </div>
                           <div class="generate-response" >
                              <!-- <input type="hidden" name="_method" value="{request-type}"> -->
                              <input type="submit" class="generate-response-btn" value="查看结果">
                          </div>
                        </form>
                        <hr>
