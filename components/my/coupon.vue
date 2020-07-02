<template>
    <div>
        <van-nav-bar title ="可用优惠券" @click-left="$router.go(-1)">
            <template #left>
            <van-icon name="arrow-left" size="20" color="#5e5b5b" />
            </template>
        </van-nav-bar>
        <div class="box">
            <i class="iconfont icon-youhuiquan"></i>
            <p>暂无可用优惠券</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .box{
        text-align: center;
        padding-top: 30px;
        color: darkgrey;
        font-size:12px ;
        .iconfont{
            font-size: 100px;
        }
    }
</style>