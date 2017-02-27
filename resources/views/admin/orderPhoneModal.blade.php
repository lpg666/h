<table border="1">
    <tr>
        <td colspan="3">订单号：<input style="border:medium none;" type="text" name="id" value="{{$data->id}}" readonly></td>
        <td colspan="3">下定日期：<input type="text" name="created_at" id="" value="{{$data->created_at}}"></td>
        <td colspan="3">发货日期：<input type="text" name="send" id="" value="{{$data->send}}"></td>
        <td colspan="3">签收日期：<input type="text" name="sign" id="" value="{{$data->sign}}"></td>
    </tr>
    <tr>
        <td colspan="3">
            <span class="red_color">*订单状态</span>
            <select name="state">
                @foreach(\App\Model\PhoneOrderState::all() as $state)
                    <option value="{{$state->id}}" @if($data->state == $state->id) selected @endif>{{$state->name}}</option>
                @endforeach
            </select>
        </td>
        <td colspan="3">购买数量：<input type="text" name="" id="" value="{{$data->number}}"></td>
        <td colspan="3">总价格：{{$data->price}}</td>
        <td colspan="3"><span class="red_color">应付金额：<input type="text" name="price" id="" value="{{$data->price}}"></span></td>
    </tr>
    <tr>
        <td colspan="3" class="title">客户信息</td>
        <td colspan="3">客户端：<span class="red_color">{{$data->agent}}</span></td>
        <td colspan="6">赠品：<input type="text" name="" id="" value="{{$data->gift}}"></td>
    </tr>
    <tr>
        <td colspan="3">姓名：<input type="text" name="name" id="" value="{{$data->name}}"></td>
        <td colspan="3">电话：<input type="text" name="phone" id="" value="{{$data->phone}}"></td>
        <td colspan="3">来源：{{$data->ip}}</td>
        <td colspan="3">广告ID：{{$data->ad_id}}</td>
    </tr>
    <tr><td colspan="12" class="title">客服跟单信息</td></tr>
    <tr>
        <td colspan="3">发货方式：
            <select name="express_mode_id">
                @foreach(\App\Model\ExpressMode::all() as $express)
                <option value="{{$express->id}}" @if($data->express_mode_id == $express->id) selected @endif>{{$express->name}}</option>
                @endforeach
            </select>
        </td>
        <td colspan="3">快递单号：<input type="text" name="express_number" id="" value="{{$data->express_number}}"></td>
        <td colspan="3">发货仓库：
            <select name="depot_id">
                @foreach(\App\Model\PhoneDepot::all() as $depot)
                <option value="{{$depot->id}}" @if($data->depot_id == $depot->id) selected @endif>{{$depot->name}}</option>
                @endforeach
            </select>
        </td>
        <td colspan="3"><a class="txls" href="javascript:void(0);">导出快递单</a></td>
    </tr>
    <tr>
        <td colspan="12">发货地址：<input style="width: calc(100% - 100px);" type="text" name="address" id="" value="{{$data->address}}"></td>
    </tr>
    <tr>
        <td colspan="12">下单说明：<input style="width: calc(100% - 100px);" type="text" name="remarks" id="" value="{{$data->remarks}}"></td>
    </tr>
    <tr>
        <td colspan="12">跟单说明：<textarea style="width: calc(100% - 100px); resize: none; height: 72px; line-height: 18px; margin-top: 12px;" type="text" name="text" id="">{{$data->text}}</textarea></td>
    </tr>
    <tr>
        <td colspan="12" class="title">产品信息</td>
    </tr>
    <tr>
        <td colspan="5">型号：
            <select style="width: 300px;">
                @foreach(\App\Model\PhoneModel::all() as $model)
                <option value="{{$model->id}}" @if($data->model == $model->id) selected @endif>{{$model->name}}</option>
                @endforeach
            </select>
        </td>
        <td colspan="7">短信：<select><option>1</option></select><input style="width: 400px;" type="text" name="" id=""></td>
    </tr>
</table>