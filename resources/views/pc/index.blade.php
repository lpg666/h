<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>首页</title>
</head>

<body>
    <p>静态变量 static $sta = 1</p>
    <?php
        static $sta = 1;
        echo $sta;
    ?>
    <p>常量 define('PI',3.1415)</p>
    <?php
        define('PI',3.1415);
        echo PI;
    ?>
    <p>魔术常量</p>
    <ul>
        <li>代码所在行数 __LINE__ <?php echo __LINE__; ?></li>
        <li>文件绝对路径 __FILE__ <?php echo __FILE__; ?></li>
        <li>文件所在目录 __DIR__ <?php echo __DIR__; ?></li>
        <li>函数名称 __FUNCTION__ <?php function fun(){ echo __FUNCTION__; } fun()?></li>
        <li>类名称 __CLASS__ <?php class cla{ function ss(){echo __CLASS__;} } $ssalc = new cla(); $ssalc->ss(); ?></li>
        <li>类的方法名 __METHOD__ <?php class met{ function ss(){echo __METHOD__;} } $ssalc = new met(); $ssalc->ss(); ?></li>
        <li>当前命名空间 __NAMESPACE__ <?php echo __NAMESPACE__; ?></li>
    </ul>
    <p>循环语句</p>
    for($i=0; $i<3; $i++)
    <?php
        for($i = 0; $i < 3; $i++){
            echo '循环'.$i;
        }
    ?>
    }
    <p></p>
    while($i<3)
    <?php
        $i=0;
        while ($i<3){
           echo '循环'.$i++;
        }
    ?>
    <p></p>
    do{$i++}while($i<3)
    <?php
        $i=0;
        do{
            $i++;
            echo '循环'.$i;
        }while($i<3);
    ?>
    <p>条件判断语句</p>
    if(){}else{}
    <?php
        if(1 ==1){

        }else{

        }
    ?>
    <p></p>
    $sw = 1; |
    switch($sw){
        case 0:
            echo 0;
            break;
        default:
            echo 1;
            break;
    } |
    <?php
        $sw = 1;
        switch($sw){
            case 0:
                echo 0;
                break;
            default:
                echo 1;
                break;
        }
    ?>
    <p>定界符 <<<</p>
    <?php
        echo <<<mk
    \\-\=-//
mk;
    ?>
    <p>字符串</p>
    <ul>
        <li>截取：$str = 'Hello sp'; | <b>substr</b>($str,-1,1) |
            <?php
            $str = 'Hello sp';
            echo substr($str,-1,1);
            ?>
        </li>
        <li>格式化：printf() | sprintf</li>
        <li>解析\n：nl2br()</li>
        <li>强制换行：wordwrap()</li>
        <li>修改大小写：strtoupper() | strtolower() 首字母大写：ucwords()</li>
        <li>字符串长度：strlen()</li>
    </ul>
    <?php

    ?>
<script>

</script>
</body>
</html>