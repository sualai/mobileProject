<template>
    <div class="page">
        <van-sticky>
            <van-nav-bar :title="$route.name">
            <template #left>
                <van-icon name="arrow-left" size="20" color="#424242" @click="$router.go(-1)" />
            </template>
            <template #right>
                <van-icon name="home-o" size="20" color="#424242" @click="$router.push('/home')" />
            </template>
            </van-nav-bar>
        </van-sticky>
        <div class="cart_list" v-if="list.length">
            <van-row class="cart_box"  v-for="(item,index) in list" :key="index">
            <van-col span="2">
                <van-checkbox v-model="item.isselect" checked-color="#07c160"></van-checkbox>
            </van-col>
            <van-col span="7">
                <van-image
                    fit="cover"
                    :src="item.img"
                    />
            </van-col>
            <van-col span="14">
                <div class="content">
                    <h2>{{item.name}}</h2>
                    <h3> {{item.style}} </h3>
                    <div>
                        <van-tag round size="small" color="#d653b1">折后价</van-tag>
                        <van-tag round size="small" color="#edf3ff" text-color="#78b9ec">七天退换</van-tag>
                        <van-tag round size="small" color="#edf3ff" text-color="#78b9ec">退货无忧</van-tag>
                    </div>
                    <p class="reice">
                        <span class="newPrice">￥{{item.newPrice}}</span>
                        <span class="oldPrice">￥{{item.oldPrice}}</span>
                    </p>
                    <div class="opration">
                        <button class="btn" @click="item.num<=1?1:item.num--" >-</button>
                        <span class="num">{{item.num}}</span>
                        <button class="btn" @click="item.num++" >+</button>
                        <span class="del" @click="del(index)">
                            <van-icon name="delete" />
                        </span>
                    </div>
                </div>
            </van-col>
            </van-row>
        </div>
        <div class="empty" v-else>
            <van-empty description="购物车居然还是空的">
                <van-button round plain color="#7232dd" to="/category" class="bottom-button">
                    去逛逛
                </van-button>
            </van-empty>
                    </div>
        <van-submit-bar :price="total*100" @submit="onSubmit" button-text="提交订单" >
            <van-checkbox checked-color="#07c160" v-model="checked">全选</van-checkbox>
        </van-submit-bar>
        <div class="goods">
            <h3 class="title">精选推荐</h3>
            <jt-list :jxlist = "jxlist"></jt-list>
        </div>
    </div>
</template>

<script>
import jtList from "../components/public/jtList.vue"
    export default {
        data(){
            return {
                list:[],
                jxlist:[]
            }
        },
        methods:{
            del(i){
                // this.$store.commit('cart/del',i)
                // this.cartList.splice(i,1)
                this.list.splice(i,1)
            },
            onSubmit(){
                let subGoods = this.list.filter(item=>item.isselect)
                if(subGoods.length==0){
                    return ;
                }
                let num = subGoods.reduce((tatalNum,item)=>{
                    return tatalNum + item.num
                },0)
                let obj = {
                    goodList:subGoods,
                    address:{},
                    orderCode:(new Date()).getTime()+(Math.random()*19999),
                    typeCode:1,
                    totalNum:num,  
                    totalPrice:this.total
                }
                Object.assign(this.$store.state.order.ordering,obj)
                this.$router.push('/orderRequire')
            }
        },
        components:{
            jtList
        },
        computed:{
            checked:{
                get(){
                    let flag = true
                    this.list.forEach(item=>{
                        if (!item.isselect == true) {
                            flag = false
                        }
                    })
                    return flag
                },
                set(value){
                    this.list.forEach(item=>{
                        item.isselect = value
                    })
                }
            },
            total(){
                return this.list.reduce((tatal,item)=>{
                    if(item.isselect){
                        return tatal + parseInt(item.newPrice)*parseInt(item.num)
                    } 
                    return tatal  
                },0)
            }
        },
        created() {
            this.$store.state.showTop = false;
            this.$store.state.showBottom = false
            Object.assign(this.list,this.$store.state.cart.cartList)
            Object.assign(this.jxlist,this.$store.state.clothing.tj)
        },
        beforeDestroy(){
            // this.$store.commit("cart/edit",this.list);
            this.$store.state.cart.cartList = this.list
        }
    }
</script>

<style lang="scss" scoped>
.page{
    padding-bottom: 50px;
    background-color: #f0f0f0;
}
.van-nav-bar .van-nav-bar__arrow  {
    font-size: 28px;
    color: #424242;
}
.cart_list{
    position: relative;
    min-height: 250px;
    background-color: #f0f0f0;
    .van-row{
        background-color: #fff;
        padding: 10px;
        box-sizing: border-box;
        .van-col--7{
            border-radius: 10px;
            overflow: hidden;
        }
    }
    .van-col{
        position: relative;
        text-align: center;
        height: 200px;
        overflow: hidden;
        .van-checkbox{
            position: absolute;
            top: 30%;
            left: 5px;
            // transform: translateY(-50%);
        }
        .content{
            padding: 0 20px;
            text-align: left;
            h2,h3{
                font-weight: normal;
            }
            h2{
                font-size: 12px;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            h3{
                font-size: 12px;
                padding:0 0  5px  0;
                margin: 0;
                color:#ccc ;
            }
            .reice{
                margin-top:5px;
                padding: 0 0 5px 0;
                margin: 0;
                .newPrice{
                    font-size: 14px;
                    margin-right: 5px;
                }
                .oldPrice{
                    font-size: 12px;
                    text-decoration: line-through;
                    color: darkslategray;
                }
            }
            .opration{
                    .btn{
                        outline: none;
                        background-color: #fff;
                        border:1px solid #ccc;
                        height: 20px;
                        width: 30px;
                        font-size: 14px;
                        box-sizing: border-box;
                        vertical-align: middle;
                        &:nth-child(1){
                            border-top-left-radius: 15px;
                            border-bottom-left-radius: 15px;
                        }
                        &:nth-child(3){
                            border-top-right-radius: 15px;
                            border-bottom-right-radius: 15px;
                        }
                     }
                .num{
                    display: inline-block;
                    width: 30px;
                    height: 20px;
                    font-size: 16px;
                    line-height: 20px;
                    border-top: 1px solid #ccc;
                    border-bottom:1px solid #fccc ;
                    box-sizing: border-box;
                    text-align: center;
                    vertical-align: middle;
                }
                .del{
                    float: right;
                    color: dimgray;
                    padding-top: 5px;
                    padding-right: 30px;
                }
            }
            .van-tag{
                margin-right: 5px;
            }
        }
    }
}
.bottom-button{
    padding: 0 30px;
}
.goods{
    background-color: #f0f0f0;
        margin-top: 10px;
    .title{
        font-weight: normal;
        text-align: center;
        position: relative;
        height: 50px;
        margin: 0;
        &::after,
        &::before{
            content: " -- ";
            font-size: 30px;
        }
    }  
}
</style>