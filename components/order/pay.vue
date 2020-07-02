<template>
    <div>
        <div class="top">
            <van-icon name="cross" @click="cancel" size="28" color="#ccc" />
            <h3 class="title">桃依收银台</h3>
        </div>
        
        <div class="step_box">
            <div class="step">
                <img src="../../assets/images/step.png" alt="">
            </div>
            <p>订单提交成功，请在 <span>29：40</span> 内完成付款</p>
        </div>
        <van-row @click="select1">
            <van-col span="3">
                <van-checkbox :value="checked1" checked-color="#07c160"></van-checkbox>
            </van-col>
            <van-col span="21">
                <van-icon name="alipay" size="28" color="#00a0e9" /> <span>支付宝支付</span>
            </van-col>
        </van-row>
        <van-row @click="select2">
            <van-col span="3">
                <van-checkbox :value="checked2" checked-color="#07c160"></van-checkbox>
            </van-col>
            <van-col span="21">
                <van-icon name="wechat" color="#00c800" size="28"  /> <span>微信支付</span>
            </van-col>
        </van-row>
        <div class="pay">
            <p>支付 <span>￥{{this.$store.state.order.ordering.totalPrice}}</span> </p>
            <van-button @click="success" :color="complete?'#e80080':'#ccc'" :disabled="!complete"  block>去支付</van-button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data(){
            return {
                active:0,
                checked1:false,
                checked2:false
            }
        },
        methods:{
            select2(){
                this.checked2 = !this.checked2
                if(this.checked2&&this.checked1){
                    this.checked1 = false
                }
            },
            select1(){
                this.checked1 = !this.checked1
                 if(this.checked2&&this.checked1){
                    this.checked2 = false
                }
            },
            cancel(){
                this.$store.state.order.ordering.typeCode = 0
                this.$store.commit('order/addList')
                this.$router.push('/order/orderUnpay')
            },
            success(){
                Toast.success('支付成功');
                this.$store.state.order.ordering.typeCode = 1
               
                this.$store.commit('cart/removeList',this.$store.state.order.ordering.goodList)
                this.$store.commit('order/addList')
                this.$router.push('/order/orderEnd')
                
            }
        },
        computed:{
            complete(){
                return this.checked2 || this.checked1
            }
        },
        created(){
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
        }
    }
</script>

<style lang="scss" scoped>
.top{
    position: relative;
    .van-icon{
        position: absolute;
        top: 20px;
        left: 5px;
    }
}
 .title{
        padding: 20px 0;
        text-align: center;
        font-weight:normal;
        font-size: 18px;
        color: #424242;
    }
.step_box{
   background-color: #f2fdec;
   padding-top: 20px;
   text-align: center;
   .step{
       width: 200px;
       margin: 0 auto;
   }
   img{
       width: 100%;
   }
    p{
        text-align: center;
        margin: 0;
        padding: 20px 0;
        font-size: 14px;
    }
}
.van-row{
    padding: 10px 10px;
    .van-col{
        span{
            vertical-align:top;
            margin-left:5px ;
        }
    }
}
.pay{
    position:fixed;
    width: 100%;
    box-sizing: border-box;
    bottom: 0px;
    padding: 10px;
    text-align: center;
    border-top: 1px solid #f0f0f0;
    p{
        font-size: 18px;
        span{
            color: #e80080;
            font-weight: 550;
        }
    }
}
</style>