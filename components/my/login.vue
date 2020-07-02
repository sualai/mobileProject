<template>
    <div class="page">
        <div class="top_bg">
            <img src="../../assets/images/yi_logo.png" alt="">
            <h3>品牌特卖</h3>
        </div>
        <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="username"
                    label="手机号"
                    placeholder="手机号登录"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block color="#f3d5f3" type="info" native-type="submit">
                    登录
                    </van-button>
                </div>
            </van-form>
            <span class="reg">
                还没账号？
                <router-link  to="/register">去注册</router-link>
            </span>
            
            <span @click="findBack" class="btn">忘记密码</span>
          
    </div>
</template>

<script>
    import {Toast} from "vant"
    export default {
        data() {
            return {
            username: '',
            password: '',
            };
        },
        methods: {
            onSubmit(values) {
                this.$store.state.username = '桃依'+ parseInt(Math.random()*999) + '会员'
                this.$axios.get("http://47.105.132.2:3000/login",{
                    params:{
                        username:values.username,
                        password:values.password
                    }
                }).then(req=>{
                    if(req.data == 200){
                        Toast("登录成功")
                        this.$router.go(-1)
                    }else{
                        Toast("密码错误")
                    }
                    
                })
            },
            findBack(){
                Toast.fail('暂不支持找回');
            }
        },
        created(){
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
        }
    }
</script>

<style lang="scss" scoped>
.page{
    width:100%
}
 .top_bg{
     width: 100%;
     height: 200px;
    text-align: center;
    background-image: linear-gradient(#f7c8f7,#f7c8f7,#fff);
    img{
        padding-top: 20px;
        transform: scale(.6);
    }
    h3{
        font-weight: normal;
        position: relative;
        top: -30px;
        letter-spacing: 15px;
    }
 }
 .reg{
     padding-left: 20px;
     font-size: 12px;
     a{
         color:cornflowerblue;
     }
 }
 .btn{
     float: right;
     padding-right: 20px;
     font-size: 12px;
     color:cornflowerblue;
 }
</style>