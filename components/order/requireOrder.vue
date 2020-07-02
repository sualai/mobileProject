<template>
    <div class="page">

        <van-nav-bar title="确认订单" >
            <template #left>
                <van-icon @click="$router.push('/cart')" name="arrow-left" size="20" color="#424242" />
            </template>
        </van-nav-bar>
       <div class="secu">
           <i class="iconfont icon-068zhanghuanquan"></i>
           你正在安全购物环境中，请放心购买
       </div>
       <div v-if="!flag" class="setAddr" @click="goAddr">
           设置收货地址
           <van-icon size="20" name="arrow" />
       </div>
       <div v-else class="relate" @click="goAddr" >
           <van-contact-card type="edit" :name="address.name" :tel="address.tel" :editable="true" />
           <p class="addr"> 地址：{{address.address}}</p>
       </div>
       
       <div class="orderr_list">
            <h3>桃依自营</h3>
            <van-row v-for="(item,index) in list" :key="index">
                <van-col span="4">
                    <img :src="item.img" alt="">
                </van-col>
                <van-col span="16">
                    <p class="name">{{item.name}}</p>
                    <p class="style">{{item.style}}</p>
                    <div class="tag" >
                        <van-tag round color="#d653b1">折后价</van-tag>
                        <van-tag round color="#edf3ff" text-color="#78b9ec">七天退换</van-tag>
                        <van-tag round color="#edf3ff" text-color="#78b9ec">退货无忧</van-tag>
                    </div>
                    
                </van-col>
                <van-col span="4">
                    <p class="newPrice">￥{{item.newPrice}}</p>
                    <p class="oldPrice">￥{{item.oldPrice}}</p> 
                    <p class="num">X {{item.num}}</p> 
                </van-col>
            </van-row>
       </div>
        <div class="describe">
            <p class="price"> <span>共{{totalnum}}个商品 </span>  ￥{{totalPrice}}</p>
            <div class="msg">
                <van-row>
                    <van-col span="4">
                        <van-tag plain >免邮</van-tag>
                    </van-col>
                    <van-col span="18">
                         桃依自营商品已享受新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）
                    </van-col>
                </van-row>
            </div>
        </div>

       <div  class="online">
            <van-row>
                <van-col span="3">
                    <van-radio-group v-model="radio" >
                      <van-radio name="1" icon-size="18px"  checked-color="#07c160"></van-radio>
                    </van-radio-group>
                </van-col>
                <van-col span="21">
                    <p>在线在支付</p>
                    <span>支持微信和支付宝等支付方式</span>
                </van-col>
            </van-row>
       </div>
        <van-coupon-cell
            disabled-title
        />
        <div class="order_tag1">
            <van-icon name="warning-o" size="18" />
            零钱已升级，提交订单后可在支付列表使用
        </div>
        <van-cell title="发票" is-link value="不开发票" />
        <div class="fix">
            <div class="pay">
                还需支付：<span>￥{{totalPrice}}</span>
                <p>不支持货到付款</p>
            </div>
            <van-row>
                <van-col span="12">
                    <van-button color="#ccc" disabled  block>货到付款</van-button>
                </van-col>
                <van-col span="12">
                    <van-button color="#e80080" @click="gopay" block>在线支付</van-button>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
import { Toast} from "vant"
    export default {
        data(){
            return {
                flag:true,
                isChange:false,
                address:{},
                list:[],
                radio:'1'
            }
        },
        methods:{
            goAddr(){
                this.isChange = true
                this.$store.state.previouseRouter = 'order'
                this.$router.push('/address')
            },
            gopay(){
                if(this.address.name == undefined){
                   Toast('请添加收货地址');
                    return ;
                }
                Object.assign(this.$store.state.order.ordering.goodList,this.list)
                Object.assign(this.$store.state.order.ordering.address,this.address)
                this.$router.push('/pay')
            }
        },
        created(){
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
            Object.assign(this.list,this.$store.state.order.ordering.goodList)
            if (this.$store.state.address.list.length == 0){
                this.flag = false
                return
            } 
            if(!this.$store.state.address.selectAddr.name){
                let index = this.$store.state.address.list.findIndex(item => item.isDefault == true)
                index == (-1)?Object.assign(this.address,this.$store.state.address.list[0]):Object.assign(this.address,this.$store.state.address.list[index])
                return 
            }
            Object.assign(this.address,this.$store.state.address.selectAddr)
            
        },
        computed:{
            totalnum(){
                return this.list.reduce((total,item)=>{
                    return total + parseInt(item.num)
                },0)
            },
            totalPrice(){
                return this.list.reduce((total,item)=>{
                    return total + item.num *item.newPrice
                },0)
            }
        }
    }
</script>

<style lang="scss" scoped>
.page{
    background-color: #f0f0f0;
    padding-bottom: 200px;
}
.secu{
    height: 65px;
    line-height: 65px;
    padding: 0 20px;
    background-color: #e8eaf4;
    font-size: 14px;
    color: #3c3f3f;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .icon-068zhanghuanquan{
        font-size: 20px;
        color: #4cc144;
        vertical-align: middle;
    }
}
.setAddr{
    background-color: #656c89;
    width: 100%;
    height: 78px;
    line-height: 78px;
    padding:0 20px ;
    font-size: 14px;
    overflow: hidden;
    color: #f0f0f0;
    box-sizing: border-box;
    .van-icon{
        float: right;
        margin-top: 25px;
    }
}
.orderr_list{
    padding: 0 10px 20px 10px;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    .van-row{
        margin-bottom: 15px;
    }
    h3{
        font-weight: normal;
        padding:  10px 0;
    }
    img{
        width: 100%;
    }
    p{
        margin: 0;
        padding: 0;
    }
    .name{
        font-size: 12px;
        padding: 0 15px;
        box-sizing: border-box;
    }
    .style{
        font-size: 12px;
        padding-left:15px ;
        margin-top: 10px;
        color: darkgrey;
    }
    .tag{
        padding: 0 10px;
        margin-top: 5px;
        .van-tag {
            margin-right: 5px;
        }
    }
    .newPrice{
        font-size: 14px;
    }
    .oldPrice{
        font-size: 12px;
        color: #ccc;
        text-decoration: line-through;
    }
     .num{
        font-size: 12px;
        color: darkgrey;
        // text-align: center;
        padding-top: 20px;
    }
}
.describe{
    padding: 0 10px;
    background-color: #fff;
    box-sizing: border-box;
    overflow: auto;
    
    zoom: 1;
    p{
        padding: 0;
        margin: 0;
    }
    .price{
        padding: 20px 0;
        font-size: 16px;
        float: right;
        span{
            font-size: 12px;
        }
    }
    .msg{
        float: left;   
    }
    .van-col--4{
        text-align: center;
        line-height: 50px;
    }
    .van-col--18{
        font-size: 12px;
        line-height: 20px;
    }
}
.online{
    padding: 10px 0;
    box-sizing: border-box;
    .van-row{
        background: #fff;
        padding: 10px;
        .van-col--3{
            padding-top: 5px;
        }
        p{
            margin: 0;
            padding: 0;
            font-size: 12px;
        }
        span{
            font-size: 12px;
            color:darkgrey;
        }
    }
}
.order_tag1{
    // height: 50px;
    // line-height: 50;
    padding: 20px 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: #585c64;
    .van-icon{
        margin-right: 5px;
        vertical-align: middle;
    }
}

.fix{
    position:fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 999;
    width: 100%;
    text-align: center;
    border-top: 1px solid #ccc;
    padding-bottom: 10px;
    .van-button{
        transform: scale(.89);
        font-size: 16px;
    }
    p{
        padding: 0;
        margin: 0;
    }
    .pay{
        padding: 20px 0;
        font-size: 14px;
        span{
            color: #e82491;
            font-size: 14px;
        }
        p{
            color: #ccc;
            font-size: 12px;
        }
    }
   
}
.relate{
    position: relative;
    .van-contact-card{
        padding-bottom:40px ;
    }
    .addr{
        padding: 0;
        margin: 0;
        position: absolute;
        width: 100%;
        top: 55px;
        font-size: 14px;
        padding-left: 40px;
        padding-right:30px ;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
}
</style>