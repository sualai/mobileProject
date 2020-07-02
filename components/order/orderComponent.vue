<template>
    <div>
        <div class="page">
            <!-- 订单列表 -->
        <div v-show="orderrlist.length">
            <div class="order_list" v-for="(item,index) in orderrlist" :key="item.orderCode">
                <div class="list">
                    <van-cell center title="桃依自营" :value="$store.state.order.typeMessage[item.typeCode]" :label="'订单编号'+item.orderCode" />
                    <van-row v-for="(listItem,num) in item.goodList" :key="index+num">
                        <van-col span="7">
                            <!-- <img :src="listItem.img" alt=""> -->
                            <van-image
                            fit="cover"
                            :src="listItem.img"
                            />
                        </van-col>
                        <van-col span="12">
                            <div class="name">
                                {{listItem.name}}
                            </div>
                            <p class="style">{{listItem.style}}</p>
                            <van-tag round color="#edf3ff" text-color="#78b9ec">七天退换</van-tag>
                        </van-col>
                        <van-col span="5">
                        <div  class="price">
                                ￥{{listItem.newPrice}}
                        </div>
                            <span>x {{listItem.num}}</span>
                        </van-col>
                    </van-row>
                    <div class="order_msg">
                        共<span class="num">{{item.totalNum}}</span>件商品 <span class="price_msg">订单金额为￥ {{item.totalPrice}}</span>
                    </div>
                </div>
                
                <div class="btn" >
                    <!-- 未支付 -->
                    <div v-if="item.typeCode==0">
                        <van-button round size="small" @click="continune(item)" plain hairline color="#5bcd16" >继续支付</van-button>
                        <van-button round size="small" @click="del(item)"  plain hairline color="#f0214d" >删除订单</van-button>
                    </div>
                    <!-- 待收货 -->
                    <div v-else-if="item.typeCode==1">
                        <van-button round size="small" disabled  plain type="default"  >申请退款</van-button>
                        <van-button round size="small" @click="orderRequire(item)"  plain hairline type="info">确认收货</van-button>
                    </div>

                    <!-- 已完成 -->
                    <div v-else-if="item.typeCode==2">
                        <van-button round size="small" @click="eval(item)" plain hairline color="#de59f2">去评价</van-button>
                    </div>
                    <div v-else>
                        <span class="end">以评价</span>
                        <!-- <van-button round size="small" @click="$router.push('detail')" plain hairline color="#de59f2">再来一单</van-button> -->
                    </div>
                </div>

            </div>
        </div>
        <!-- 订单列表 end -->

        <!-- 空状态 -->
        <div class="empty" v-show="!(orderrlist.length)">
            <van-empty description="暂无订单" />
        </div>

        <!-- 评价弹窗 -->
        <van-popup 
            v-model="evaluate"
            position="bottom" 
            :style="{ height: '100%' }" 
         >
            <van-nav-bar 
                @click-left="onClickLeft"
                @click-right="onClickRight"
                >
                <template #left>
                    <span>
                        <van-icon name="down" color="#434343" size="20" />
                        发表评价
                    </span>
                </template>
                <template #right>
                    <span class="post">发表</span>
                </template>
            </van-nav-bar>
            <div class="content_box">
                <div class="container">
                    <van-row v-for="(item,index) in msg.goodList" :key="index">
                        <van-col span="5">
                            <van-image
                                width="100%"
                                fit="cover"
                                :src="item.img"
                                />
                        </van-col>
                        <van-col offset = "1" span="18">
                            <p class="name">{{item.name}}</p>
                            <span class="style">{{item.style}}</span>
                        </van-col>
                        
                    </van-row>
                    <van-row>
                        <van-col span="6">
                            <h3>描述相符</h3>
                        </van-col>
                        <van-col span="12">
                            <van-rate
                                v-model="value"
                                :size="20"
                                color="#ee0a24"
                                void-icon="star"
                                void-color="#eee"
                                />
                        </van-col>
                        <van-col span="6">
                            <h3>{{type[valueId-1]}}</h3>
                        </van-col>
                    </van-row>
                    <div class="msg_box">
                        <van-icon name='edit' />
                        <textarea   
                            cols="30" 
                            rows="5" 
                            v-model="message" 
                            placeholder="从多个角度评价宝贝,可以帮助更多想买的人"
                        ></textarea> 

                        <van-field name="uploader" >
                        <template #input>
                            <van-uploader v-model="uploader" disabled  />
                        </template>
                        </van-field>
                    </div>
                </div>
                <div  class="serve">
                    <p>
                        <span>物流服务</span>
                        <van-rate
                            v-model="postvalue"
                            :size="20"
                            color="#ee0a24"
                            void-icon="star"
                            void-color="#eee"
                        />
                        <span class="type" v-show="postId">{{type[postId-1]}}</span>
                    </p>
                    <p>
                        <span>服务态度</span>
                        <van-rate
                            v-model="serverValue"
                            :size="20"
                            color="#ee0a24"
                            void-icon="star"
                            void-color="#eee"
                        />
                        <span class="type" v-show="serverId">{{type[serverId-1]}}</span>
                    </p>
                </div>
            </div>
        </van-popup>
        <!-- 评价弹窗end -->
    </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
import { Toast } from "vant"
    export default {
        data(){
            return {
                value:5,
                postvalue:0,
                serverValue:0,
                evaluate:false,
                message:'',
                uploader: [],
                type:['非常差','差','一般','好','非常好'],
                msg:[]
            }
        },
        methods:{
            continune(item){
                Object.assign(this.$store.state.order.ordering,item)
                this.$router.push('/pay')
            },
            // 删除订单
            del(obj){
                this.$store.commit('order/del',obj)
                let index = this.orderrlist.findIndex(item => {
                    item.id == obj.id
                })
                this.orderrlist.splice(index,1)
                this.$router.push('/order/orderAll')
            },
            // 确认订单
            orderRequire(item){
                 this.$store.commit('order/changeCode',item)
                 this.$router.push('/order/orderComplete')
            },
            // 评论
            eval(item){
                this.evaluate = true
                Object.assign(this.msg,item)
            },
             // 退出评价
            onClickLeft(){
                Dialog.confirm({
                title: '要确认退出评价?',
                message: '退出后编辑过的内容将不保存',
                })
                .then(() => {
                    // on confirm
                    this.evaluate =false
                })
                .catch(() => {
                    // on cancel
                    
                });
            },
            // 格式化时间
            formTime(str){
                let date = new Date(str)
                let d = date.getDate()
                let m = date.getMonth()+1
                let y = date.getFullYear()
                return `${y}-${m}-${d}`
            },
            // 发表评价
            onClickRight(){
                
                if(this.message == "" ){
                    Toast.fail('请填写评价内容！');
                    return ;
                }
                let evaluateList = []
                
                this.msg.goodList.forEach(item=>{
                    let evObj = {
                        time:this.formTime(new Date()),
                        type:this.type[this.value],
                        content:this.message,
                        value:this.value,
                        post:this.postvalue,
                        serve:this.serverValue
                    }
                    Object.assign(evObj,item)
                    evaluateList.push(evObj)
                })
                this.evaluate = true
                this.$store.commit('order/changeCode',this.msg)
                this.$store.commit('evaluation/add',evaluateList)
                this.$router.push('/my')
            }
        },
        computed:{
            valueId(){
                return this.value
            },
            serverId(){
                return this.serverValue
            },
            postId(){
                return this.postvalue
            }

        },
        created(){
        },
        props:['orderrlist']
    }
</script>

<style lang="scss" scoped>
.page{
    background-color: #f0f0f0;
   
    width: 100%;
    box-sizing: border-box;
    position:absolute;
    width: 100%;
    min-height: 100%;
    .empty{
       position: absolute;
       width: 100%;
       height: 100%;
    }
}
.order_list{
    border-radius: 10px;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 10px;
    .end{
        font-size: 12px;
        padding-right: 10px;
        color: #333;
    }
    .list{
        border-bottom: 1px solid #ccc;
    }
    .van-cell__title{
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .van-cell__label{
        letter-spacing: normal;
    }
    .van-cell__value{
        font-size: 12px;
    }
    .van-row{
        background-color: #fff;
        .van-col--7{
            transform: scale(.89);
             border-radius:10px ;
             overflow: hidden;
        }
        
        .name{
            padding-top: 15px;
            font-size: 12px;
            color: #585c00;
        }
        .style{
            font-size: 12px;
            color: #585c64;
        }
        .van-col--5{
             padding-top: 15px;
            text-align: right;
            padding-right: 10px;
            box-sizing: border-box; 
            font-size: 14px;
            color: #585c64;
            span{
                display: inline-block;
                padding-top: 40px;
                padding-right: 5px;
            }
        }
    }
    .order_msg{
        padding-right: 10px;
        text-align: right;
    }
    .order_msg{
        font-size: 12px;
        color: #585c64;
        .num{
            color: #000;
            margin: 0 3px;
        }
        .price_msg{
            font-size: 12px;
            color: #000;
            margin-left: 10px;
            font-weight: bold;
        }
        padding-bottom: 10px;
    }
    .btn{
        text-align: right;
        padding: 10px 0;
        margin: 5px;
        .van-button{
            margin: 0 5px;
        }
    }
}
.van-popup {
    background-color: #f0f0f0;
    box-sizing: border-box;
    .van-nav-bar{
        padding: 0 0 10px 0;
        color: #534343;
        .post{
            color: #f50;
        }
    }
    .van-icon-down{
        vertical-align: middle;
        transform: rotate(90deg);
    }
    .content_box{
        padding: 10px;
        .container{
            background-color: #fff;
            border-radius: 10px;
            .van-row{
                padding-top: 10px;
                .van-image{
                    transform: scale(.8);
                }
                .name{
                    padding:15px 0 10px  0;
                    margin: 0;
                    font-size: 12px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .style{
                    font-size: 12px;
                    color: darkgray;
                }
                h3{
                    padding: 5px 0  5px 5px ;
                    margin: 0;
                    font-size: 12px;
                    color:#535353 ;
                }
            }
            .msg_box{
                text-align: center;
                position: relative;
                .van-icon{
                    position: absolute;
                    top: 0 ;
                    left: 10px;
                }
            }
            textarea{
                border: none;
                resize: none;
                font-size: 12px;
            }
        }
        .serve{
            margin-top: 10px;
            background-color: #fff;
            padding: 5px;
            border-radius: 10px;
            p{
                font-weight: bold;
                font-size: 13px;
                padding: 0;
                span{
                    margin-right: 10px;
                }
                .van-rate{
                    vertical-align: middle;
                }
                .type{
                    float: right;
                    padding-right: 10px;
                    font-size: 12px;
                    font-weight: normal;
                    color: darkgray;
                }
            }
        }
    }

}

</style>
