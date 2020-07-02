<template>
    <div>
        <van-nav-bar title ="消息中心" @click-left="$router.go(-1)">
            <template #left>
            <van-icon name="arrow-left" size="20" color="#5e5b5b" />
            </template>
        </van-nav-bar>
        <div class="content">
            <van-row>
                <van-col span="4" @click="$router.push('/order/orderAll')">
                    <div class="icon">
                        <i class="iconfont icon-dingdan"></i>
                    </div>
                </van-col>
                <van-col span="20" @click="$router.push('/order/orderAll')">
                    <p> 订单助手</p>
                    <span> 订单状态 </span>
                </van-col>
                <van-col span="4">
                    <div class="icon">
                        <van-icon name="volume-o" size="20" />
                    </div>
                </van-col>
                <van-col span="20">
                    <p> 通知消息</p>
                    <span> 暂无新消息 </span>
                </van-col>
                <van-col span="4">
                    <div class="icon">
                        <van-icon name="discount" size="20" />
                    </div>
                </van-col>
                <van-col span="20">
                    <p> 优惠活动</p>
                    <span> 暂无优惠活动</span>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        p{
            margin: 0;
            padding: 0;
            font-size: 14px;
           
        }
        padding-left: 10px;
        .van-col {
            height: 80px;
            padding: 20px 0;
            border-bottom: 1px solid #ccc;
             span{
                font-size: 12px;
                color: darkgrey;
            }
        }
        .van-col--4{
            text-align: center;
            .icon{
                border: 1px solid #ccc;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin: 0 auto;
                .van-icon{
                    padding-top: 10px;
                }
            }
            .iconfont{
                font-size: 20px;
                line-height: 40px;
            } 
        }
    }
</style>