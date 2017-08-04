<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>element</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('vue/css/element.css') }}">
    <script type="text/javascript" src="{{asset('vue/js/vue.js')}}"></script>
    <script type="text/javascript" src="{{asset('vue/js/element.js')}}"></script>
    <script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
    <style>
        *{margin: 0; padding: 0; font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
    </style>
</head>

<body>
    <div id="app">

        <el-row type="flex" justify="center">
            <el-col :span="12">
                <el-form :rules="rules" ref="ruleForm" label-position="top" label-width="80px">
                    <el-form-item label="活动名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</body>
</html>
<script>
    new Vue({
        el: '#app',
        data: function() {
            return {
                ruleForm:{
                    name: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }

    })
</script>