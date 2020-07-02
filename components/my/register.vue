<template>
    <div class="page">
        <div class="top_bg">
            <img src="../../assets/images/yi_logo.png" alt="">
            <h3>品牌特卖</h3>
        </div>
        <van-form @submit="onSubmit">
                <van-field
                    v-model="phone"
                    name="pattern"
                    label="手机号"
                    placeholder="请输入手机号"
                    :rules="[{ pattern, message: '请输入正确的手机号' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                 <van-field
                    v-model="requireP"
                    type="password"
                    name="validator"
                    label="确认密码"
                    placeholder="确认密码"
                    :rules="[{ validator, message: '密码不一致' }]"
                />
                <!-- <van-row>
                    <van-col span="18">
                        <van-field
                            v-model="verificationCode"
                            type="number"
                            name="code"
                            label="验证码"
                            placeholder="请输入验证码"
                            :rules="[{ required: true, message: '验证码错误' }]"
                        />
                    </van-col>
                    <van-col span="6">
                        <div >获取验证码</div>
                    </van-col>
                </van-row> -->
                
                <div style="margin: 16px;">
                    <van-button round block color="#f3d5f3" type="info" native-type="submit">
                    手机号注册登录
                    </van-button>
                </div>
            </van-form>
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
         data() {
            return {
                phone: '',
                password: '',
                requireP:'',
                pattern: /\d{11}/,
            };
        },
        methods: {
             validator(val) {
                 
                return this.password === val
            },
            onSubmit(values) {
                this.$store.state.username = '桃依'+ parseInt(Math.random()*999) + '会员'
               
                this.$axios.get("http://47.105.132.2:3000/register",{
                    params:{
                        username:values.pattern,
                        password:values.password,
                        password2:values.validator
                    }
                }).then(req=>{
                    
                    if(req.data == 200){
                        Toast("注册成功")
                        this.$router.push('/my')
                    }else{
                        Toast("登录失败")
                    }
                })
                
            },
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
.van-col--18{
    border-top:1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.van-col--6{
    height: 46px;
    line-height: 46px;
    text-align: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
</style>