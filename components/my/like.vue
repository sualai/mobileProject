<template>
    <div class="page" >
        <van-sticky>
            <van-nav-bar 
                @click-left="$router.go(-1)"
                @click-right="onClickRight"
            >
                <template #title>我的收藏</template>
                <template #right >{{optTitle}}</template>
                <template #left>
                    <van-icon name="arrow-left" size="20" color="#5e5b5b" />
                </template>
            </van-nav-bar>
        </van-sticky>

        <div class="like_list" ref = "list" v-if="$store.state.like.list.length">
            <div class="list_box" ref="list" v-if="$store.state.like.list.length">
                
                <div class="tar" v-for="(item,index) in list" :key="index" >
                    <van-checkbox v-show="isShow"  v-model="item.isSelect" icon-size="20px"></van-checkbox>
                    <van-card  @click="$router.push({path:'/detail',query:{id:item.id}})"
                        :price="item.price"
                        :title="item.name"
                        >
                        <template #thumb>
                            <van-image
                                height="100%"
                                fit="contain"
                                :src="item.img"
                                />
                        </template>
                        <template #footer>
                            <div class="cart">
                                <i class="icon-gouwuche iconfont"></i>
                            </div>
                        </template>
                    </van-card>
                </div>
            </div>
             <div class="empty" v-else>
                <van-empty
                class="custom-image"
                image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                description="还没有喜欢的商品"
                />
                <router-link to="/goodsBrand">去逛逛吧</router-link>
            </div>

        </div>
        <div v-else>
            <van-empty
                class="custom-image"
                image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                description="还没有喜欢的商品!"
                />
        </div>
        <div class="goods" v-show="!isShow">
            <h3 class="title">精选推荐</h3>
            <jt-list :jxlist = "jxlist"></jt-list>
        </div>

         <div class="fix" v-show="isShow">
             <van-checkbox v-model="select" v-show="isShow" icon-size="20px">全选</van-checkbox>
            <van-button type="danger" @click="del">删除</van-button>
        </div>
    </div>
</template>

<script>
import jtList from "../../components/public/jtList.vue"
import { Toast } from "vant"
    export default {
         data(){
            return {
                jxlist:[ ],
                isShow:false,
                optTitle:'管理',
                list:[
                ]
            }
        },
        methods:{
            onClickRight(){
                if(this.list.length == 0){
                    Toast.fail('暂无收藏管理');
                    return ;
                }
                this.isShow = !this.isShow
                let tarList = this.$refs.list.getElementsByClassName('tar')
                if(this.isShow){
                    this.optTitle = '完成'
                    tarList.forEach(item=>{
                        item.classList.add('list')
                    })
                }else{
                    this.optTitle = '管理'
                    tarList.forEach(item=>{
                        item.classList.remove('list')
                    })
                }
            },
            del(){
                let temp = 0
                this.list.forEach(item=>{
                    if(item.isSelect){
                        temp +=1
                    }
                })
                this.list.sort((item1,item2)=>{
                    if(item1.isSelect && !item2.isSelect){
                        return 1
                    }else if(!item1.isSelect && !item2.isSelect || item1.isSelect && item2.isSelect){
                        return 0
                    }else {
                        return -1
                    }
                })
                this.$store.commit('like/del',{obj:this.list,num:temp})
                this.list.splice(-(temp))
                this.isShow = false
                this.optTitle = '管理'
                
            }
        },
        components:{
            jtList
        },
         computed:{
            select:{
                get(){
                    return this.list.every(item=>item.isSelect)
                },
                set(value){
                    this.list.forEach(item=>{
                        item.isSelect = value
                    })
                }
            }
        },
        created(){
            if(this.$store.state.username == ""){
                this.$router.push('/login')
                return ;
            }
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
            Object.assign(this.list,this.$store.state.like.list)
            Object.assign(this.jxlist,this.$store.state.clothing.tj)
        },
       beforeDestroy(){
           this.$store.state.like.list = this.list
       }
    }
</script>

<style lang="scss" scoped>
.page{
    background-color: #f0f0f0;
}
 .empty{
     font-size: 12px;
     color: darkmagenta;
     text-align: center;
 }
 .tar{
     position: relative;
    //  background-color: #fff;
    margin-bottom: 10px;
    .van-card{
        margin: 0;
    }
 }
 .cart{
     position: absolute;
     top: 50%;
     right: 10px;
     line-height: 30px;
     text-align: center;
     width: 30px;
     height:30px;
     border-radius: 50%;
     background-color: #c093bc;
     color: #ffffff;
 }
 .like_list{
     min-height: 100px;
     margin: 0;
 }
 .list{
    position: relative;
    padding-left: 30px;
    box-sizing: border-box;
    background-color: #fff;
   .van-checkbox{
       position: absolute;
       top: 50%;
       left: 5px;
       z-index: 999;
       transform: translateY(-50%);
   }
 }
 .fix{
     width: 100%;
     .van-checkbox{
        position: absolute;
        top: 10px;
        left: 10px;
     }
    position: fixed;
    bottom: 0;
    .van-button{
        float: right;
    }
}
.goods{
    background-color: #f0f0f0;
    margin-top: 30px;
    padding-top: 30px;
    font-size: 14px;
    .title{
        font-weight: normal;
        text-align: center;
        position: relative;
        font-size: 14px;
        height: 50px;
        margin: 0;
        &::after,
        &::before{
            content: " - - ";
            font-size: 30px;
            position: absolute;
            top: -8px;
        }
        &::before{
            left: 50%;
            transform: translateX(-70px);
        }
        &::after{
            transform: translateX(15px);
        }
    }  
}
</style>