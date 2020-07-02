<template>
    <div>
        <van-search  @focus="searchChange"  placeholder="请输入搜索关键词" />
        <div class="img_box">
            <img :src="imglist[0].img" alt="">
            <div :style="'background-color:'+color">
                 <nav-list :navlist="navlist"></nav-list>
            </div>
            <van-row>
                <van-col span="12">
                    <img :src="imglist[1].img" alt="">
                </van-col>
                <van-col span="12">
                    <img :src="imglist[2].img" alt="">
                </van-col>
            </van-row>
        </div>
        <van-sticky>
            <div class="nav">
                <van-row>
                    <van-col span="6" v-for="(item,index) in select" :key="index">
                        <span :class="{current:currentId==index}" @click="chose(index)">{{item}}</span>
                    </van-col>
                </van-row>
            </div>
        </van-sticky>
        <div class="goodlist">
            <van-row>
                <van-col span="8" v-for="(item,index) in goods" :key="index">
                    <div class="van_box" @click="$router.push({path:'detail',query:{id:item.id}})">
                        <van-image
                            width="100%"
                            fit="cover"
                            :src="item.img"
                            />
                        <van-tag round size="small" color="#efacdc">疯抢价</van-tag>
                        <span>￥{{item.newPrice}}</span>
                        <p class="name" >{{item.brand}}</p>
                    </div>
                </van-col>
            </van-row>
        </div>
        <div class="fix" @click="$router.push('/home')">
            <van-icon name="wap-home-o" size="38" />
        </div>
    </div>
</template>

<script>
import navList from "../public/navList.vue"
    export default {
        data(){
            return {
                currentId:0
            }
        },
        methods:{
            chose(i){
                this.currentId = i
               if(i == 1){
                   this.goods =  this.goods.sort((item1,item2,)=>{
                         return item1.newPrice - item2.newPrice
                    })
               }else if(i == 2){
                   this.goods =  this.goods.sort((item1,item2,)=>{
                        
                        return item2.oldPrice- item1.oldPrice 
                    })
               }else {
                   this.goods = this.goods.sort(()=>{
                        return (Math.random()-0.5)
                   })
               }
            },
            searchChange(){
                this.$router.push('/search')
            }
        },
        components:{
            navList
        },
        props:["imglist","navlist","goods","select","color"],
        created() {
            this.$store.state.showTop = false;
            this.$store.state.showBottom = false;
        }
    }
</script>

<style lang="scss" scoped>
    .img_box{
        font-size: 0;
        img{
            width: 100%;
        }
    }
    
    .nav{
        border-bottom: 1px solid #c0c0c0;
        background-color: #fff;
        height: 60px;
        line-height: 60px;
        .van-row{
            text-align: center;
            font-size: 14px;
            .van-col{
                height: 60px;
                line-height: 60px;
                span{
                    padding-bottom: 15px;
                }
                .current{
                    border-bottom: 3px solid red;
                    box-sizing: border-box;
                }
            }
        }
    }
    .fix{
        position: fixed;
        bottom: 30px;
        right: 10px;
        width: 50px;
        height: 50px;
        text-align: center;
        border-radius: 50%;
        background-color: rgba(1, 0, 0, 0.39);
        color: #fff;
        font-weight: bold;
        .van-icon{
            line-height: 50px;
        }
    }
    .goodlist{
        background-color: rgba(255,255,255,.5);
        .van_box{
            width: 100%;
            height: 170px;
            background-color: #fff;
            transform: scale(.9);
            img{
                width: 100%;
            }
            span{
                font-size: 14px;
                font-weight: bold;
                margin-left: 5px;
            }
            .van-tag{
                font-size: 12px;
                font-weight: normal;
            }
            .name{
                font-size: 14px;
                color: darkgray;
                padding: 0 0 0 5px;
                margin: 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
</style>