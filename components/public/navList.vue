<template>
    <div>
        <div class="navlist">
            <van-row>
                <van-col span="6" v-for="(item,index) in navlist" :key="index" @click="$router.push('/category')"> 
                    <div class="imgbox">
                        <img :src="item.img" :alt="item.name">
                    </div>
                    {{ item.name }}
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props:["navlist"]
    }
</script>

<style lang="scss" scoped>
.navlist{
    .van-col{
        margin-bottom:10px ;
        text-align: center;
        font-size: 12px;
        .imgbox{
            background-color: #fff;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto;
            transform: scale(.9);
            &>img{
                // margin-top: 10px;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                transform: scale(.9);
            }
        }
    }
}
</style>