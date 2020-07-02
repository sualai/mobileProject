<template>
    <div class="page">
      
        <van-nav-bar @click-left="$router.go(-1)">
            <template #title>我的桃依币</template>
            <template #left>
            <van-icon name="arrow-left" size="20" color="#5e5b5b" />
            </template>
        </van-nav-bar>
        <h1>
            暂无桃依币
            <i class="iconfont icon-jinbi"></i>
        </h1>
        <p>桃依币为购物消费所得，在支付时可以直接抵扣现金</p>
    </div>
</template>

<script>
    export default {
        created(){
            this.$store.state.showTop = false
            this.$store.state.showBottom =false
        }
    }
</script>

<style lang="scss" scoped>
.page{
    position: absolute;
    width: 100%;
    background-color: #f0f0f0;
    height: 100%;
    padding-bottom: 50px;
    overflow: hidden;
    box-sizing: border-box;
}

h1{
    margin: 0;
    background-color: #fff;
    color:darkviolet;
    font-weight: normal;
    font-size: 18px;
    padding: 20px;
    .icon-jinbi{
        font-size: 60px;
        color: #ccc;
    }
}
p{
    font-size: 12px;
    color: darkgrey;
    padding-left: 10px;
}
</style>