<template>
    <div>
        <van-row class="clearfix">
                <van-col span="12" v-for="(item,index) in jxlist" :key="index">
                    <div @click="$router.push({path:'/detail',query:{id:item.id}})">
                        <!-- <img :src="item.img" alt=""> -->
                        <van-image
                            width="100%"
                            fit="cover"
                            :src="item.img"
                            />
                        <div class="price">
                            <van-tag color="#efa8e4" size="small" round type="primary">折后价</van-tag>
                            <span class="new_price">￥{{item.newPrice}}</span>
                            <span class="old_price">￥{{item.oldPrice}}</span>
                            <span class="dz">{{item.zk}}折</span>
                        </div>
                        <p class="name">
                        {{item.name}}
                        </p>
                    </div>
                </van-col>
                <div class="nulll"></div>
            </van-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props:["jxlist"]
    }
</script>

<style lang="scss" scoped>
    .van-col--12{
        margin-top: 10px;
        padding: 0 10px;
        box-sizing: border-box;
        &>div{
            background-color: rgba(255,255,255,.49);
            padding-bottom: 10px;
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            .price{
                margin-top: 5px;
                margin-left: 10px;
                .new_price{
                    font-weight: 600;
                    font-size: 14px;
                    color: #424242;
                }
                .old_price{
                    color: #5e5b5b;
                    text-decoration: line-through;
                    margin-left: 5px;
                    font-size: 12px;
                }
                .dz{
                    color: #5e5b5b;
                    margin-left: 5px;
                    font-size: 12px;
                }
            }
            .name{
                padding: 0 20px 0 10px;
                margin: 0;
                box-sizing: border-box;
                overflow: hidden;
                font-size: 12px;
                color: #5e5b5b;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2; //行数
                -webkit-box-orient: vertical;
            }
        }
        img{
             width: 100%;
        }
    }
</style>