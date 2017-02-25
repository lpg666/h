<table border="1">
    <tr>
        <td colspan="3">订单号：<input type="text" name="id" id="" value="{{$data->id}}"></td>
        <td colspan="3">下定日期：<input type="text" name="created_at" id=""></td>
        <td colspan="3">发货日期：<input type="text" name="send" id=""></td>
        <td colspan="3">签收日期：<input type="text" name="sign" id=""></td>
    </tr>
    <tr>
        <td colspan="3">
            <span class="red_color">*订单状态</span>
            <select name="state">
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
            </select>
        </td>
        <td colspan="3">购买数量：<input type="text" name="" id=""></td>
        <td colspan="3">总价格：{{$data->price}}</td>
        <td colspan="3"><span class="red_color">应付金额：<input type="text" name="price" id="" value="{{$data->price}}">元</span></td>
    </tr>
    <tr>
        <td colspan="3" class="title">客户信息</td>
        <td colspan="3">客户端：<span class="red_color">{{$data->agent}}</span></td>
        <td colspan="6">赠品：<input type="text" name="" id=""></td>
    </tr>
    <tr>
        <td colspan="3">姓名：<input type="text" name="name" id="" value="{{$data->name}}"></td>
        <td colspan="3">电话：<input type="text" name="phone" id="" value="{{$data->phone}}"></td>
        <td colspan="3">来源：{{$data->ip}}</td>
        <td colspan="3">广告ID：{{$data->ad_id}}</td>
    </tr>
    <tr><td colspan="12" class="title">客服跟单信息</td></tr>
    <tr>
        <td colspan="3">发货方式：<select name="express_mode_id"><option>1</option></select></td>
        <td colspan="3">快递单号：<input type="text" name="express_number" id="" value="{{$data->express_number}}"></td>
        <td colspan="3">发货仓库：<select name="depot_id"><option>1</option></select></td>
        <td colspan="3"><a class="txls" href="javascript:void(0);">导出快递单</a> 导出发票联</td>
    </tr>
    <tr>
        <td colspan="12">发货地址：<input type="text" name="address" id="" value="{{$data->address}}"></td>
    </tr>
    <tr>
        <td colspan="12">下单说明：<input type="text" name="remarks" id="" value="{{$data->remarks}}"></td>
    </tr>
    <tr>
        <td colspan="12">跟单说明：<input type="text" name="text" id="" value="{{$data->text}}"></td>
    </tr>
    <tr>
        <td colspan="12" class="title">产品信息</td>
    </tr>
    <tr>
        <td colspan="5">型号：<select style="width: 300px;"><option>1</option></select></td>
        <td colspan="7">短信：<select><option>1</option></select><input style="width: 400px;" type="text" name="" id=""></td>
    </tr>
</table>