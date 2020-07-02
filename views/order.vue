<template>
    <div>
        <van-nav-bar :title="$route.name" >
            <template #left>
                <van-icon name="arrow-left" @click="$router.push('/my')" color="#424242" size="20" />
            </template>
            <template #right>
                <van-icon @click="$router.push('/home')" name="wap-home-o" color="#424242" size="20" />
            </template>
        </van-nav-bar>
        <van-tabs v-model="active">
            <van-tab title="订单" to="/order/orderAll" ></van-tab>
            <van-tab title="待支付" to="/order/orderUnpay"></van-tab>
            <van-tab title="待收货" to="/order/orderEnd"></van-tab>
            <van-tab title="待评价" to="/order/orderComplete"></van-tab>
        </van-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                resetActive:["全部订单","待支付","待收货","待评价"]
            }
        },
        created(){
            if(this.$store.state.username == ''){
                this.$router.push('/login')
                return ;
            }
            this.$store.state.showTop = false 
            this.$store.state.showBottom = false
            
        },
        computed:{
            active:{
                get(){
                    return this.resetActive.findIndex(item => {
                        return item == this.$route.name
                    })
                },
                set(value){
                    return value
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
   .van-nav-bar__title{
       font-size: 18px;
   }
   .title{
       font-size: 28px;
       color: #333;
   }
</style>