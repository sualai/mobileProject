<template>
    <div class="page">
      
        <div class="tag">
             <loop :img="goodmsg.imglist"></loop>
             <div class="return">
                 <van-icon @click="$router.go(-1)" color="#fff" size="20"  name="arrow-left" />
             </div>
             <div class="like">
                 <van-icon @click="addStore" size="20" :color="isStore?'red':'#fff'" name="like-o" />
                 <van-icon  size="20" color="#fff" @click="showShare = true" name="share" />
             </div>
        </div>
            <van-share-sheet
                v-model="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelect"
                />
        <div class="contain">
            <van-tag size="small" round color="#CD71D4">折后价</van-tag>
            <span class="newPrice">￥{{goodmsg.newPrice}}</span>
            <span class="oldPrice">￥{{goodmsg.oldPrice}}</span>
            <span class="zk">{{goodmsg.zk}}折</span>
            <p class="name">
                {{goodmsg.name}}
            </p>
            <p class="brand">{{goodmsg.brand}}</p>
        </div>
        <!-- 正品保证 -->
        <van-cell title="100%正品 · 专业鉴定 · 正品险" >
            <template #icon>
                <img src="../assets/images/detail_sec_bg.webp" alt="">
            </template>
        </van-cell>
        <!-- 选择尺寸颜色 -->
        <div class="select">
            <div class="color">
                <h2>颜色</h2>
                <div>
                    <van-button v-for="(item,index) in goodmsg.color" :key="index" plain :color="item.rgb" @click="color(index,$event)" >{{item.name}}</van-button>
                </div>
            </div>
            <div class="size">
                <h2>尺码</h2>
                <div>
                    <van-button v-for="(item,index) in  goodmsg.size" :key="index+4" plain  @click="size(index,$event)">{{item}}</van-button>
                </div>
            </div>
        </div>
        <!-- 选择end -->
        <!-- 说明 -->
        <div class="detail">
            <van-row>
                <van-col span="8">
                    <van-icon color="#c43dcc"  name="passed" />
                        桃依居发货及售后
                </van-col>
                <van-col span="8">
                    <van-icon color="#c43dcc"  name="passed" />
                        顺丰配送
                    </van-col>
                <van-col span="8">
                    <van-icon color="#c43dcc"  name="passed" />
                     七天无理由退货
                </van-col>
                <van-col span="8">
                    <van-icon color="#c43dcc"  name="passed" />
                    退换无忧
                </van-col>
                <van-col span="8">
                    <van-icon color="#c43dcc" name="passed" />
                    七天可换
                </van-col>
            </van-row>
        </div>
        <!-- 说明end -->
        <!-- 图文信息 -->
        <div class="detail_msg">
            <h2>图文详情</h2>
            <img src="../assets/images/detail_post_bg.png" alt="">
            <img src="../assets/images/detail_mgs_bg.webp" alt="">
            <img src="../assets/images/detail_bottom.png" alt="">
        </div>
        <!-- 图文信息end -->
        <div class="end">
             —· 已经到底啦，再往上逛逛吧 ·—
        </div>
        <!-- 固定底部 -->
        <div class="fix">
            <ul>
                <li><van-icon size="28" @click="$router.push('/serve')" name="service-o" /></li>
                <li>
                    <van-button round  size="large" icon="shopping-cart-o" type="default" @click="$router.push('/cart')" /> 
                    <div v-if="$store.state.cart.cartList.length" class="tag">{{$store.state.cart.cartList.length}}</div>
                </li>
                <li> <van-button round size="large" @click="addCart"  color="#de3d96">加入购物车</van-button>  </li>
            </ul>
        </div>
    </div>
</template>

<script>
import loop from "../components/public/loop.vue"
import { Toast } from 'vant'
    export default {
        data(){
            return {
                showShare: false,
                time : null,
                options: [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                ],
                goodmsg:{
                        id:'nv2',
                        name:'雅莹集团复古做旧宽松龙纹印花圆领T恤',
                        newPrice:888,
                        oldPrice:999,
                        zk:5.0,
                        brand:'戈勒斯',
                        img:require('../assets/images/jx1.jpg'),
                        color:[
                            {
                                name:'森林色',
                                rgb:'#56b776'
                            },
                            {
                                name:'砖红色',
                                rgb:'#65121e'
                            }
                        ],
                        size:['XS','S','M','L','XL']
                    },
                selectColor:'',
                selectSize:'',
                isStore:false
            }
        },
        methods:{
            color(index,event){
                let dom = event.target
                let siblings = dom .parentElement.children
                for(let i = 0 ; i < siblings.length ; i++){
                    siblings[i].style.backgroundColor = ''
                    siblings[i].style.color = this.goodmsg.color[i]['rgb']
                }
                dom.style.backgroundColor = this.goodmsg.color[index]['rgb']
                dom.style.color = '#fff'
                this.selectColor = this.goodmsg.color[index].name
            },
             size(index,event){
                let dom = event.target
                let siblings = dom .parentElement.children
                for(let i = 0 ; i < siblings.length ; i++){
                    siblings[i].style.backgroundColor = ''
                }
                dom.style.backgroundColor = '#f3d5f3'
                this.selectSize = this.goodmsg.size[index]
            },
            addStore(){
                
                this.isStore=!this.isStore
                if(this.isStore){
                    Toast('收藏成功')
                     let obj = {
                        id:this.goodmsg.id,
                        img:this.goodmsg.img,
                        name:this.goodmsg.name,
                        pricr:this.goodmsg.newPrice,
                        isSelect:false
                     }
                    this.$store.commit("like/add",obj)
                    Toast.success('收藏成功');
                }else{
                    Toast.fail('取消收藏');
                    this.$store.commit("like/delSingle",this.goodmsg.id)
                }
            },
            onSelect(option) {
                Toast(option.name);
                this.showShare = false;
            },
            addCart(){
                if(this.$store.state.username == ''){
                    this.$router.push('/login')
                    return ;
                }
                if(this.selectColor == ''){
                    Toast('请选择属性')
                    return ;
                }
                if(this.selectSize == ''){
                    Toast('请选择尺寸')
                    return ;
                }

                this.$store.commit('cart/add',{
                    id:this.goodmsg.id,
                    img:this.goodmsg.img,
                    name:this.goodmsg.name,
                    newPrice:this.goodmsg.newPrice,
                    oldPrice:this.goodmsg.oldPrice,
                    zk:this.goodmsg.zk,
                    brand:this.goodmsg.brand,
                    style:this.selectColor + ' ' +this.selectSize,
                    num:1,
                    isselect:true
                })
            }
        },
        components:{
            loop
        },
        created(){
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
            let id = this.$route.query.id 
           let list =  this.$store.state.goodlist.list.filter(item=>item.id == id)
           Object.assign(this.goodmsg,list[0])
        },
        mounted(){
            let index =  this.$store.state.like.list.findIndex(item => item.id == this.goodmsg.id)
            if(index !== (-1)){
                this.isStore = true
            } 
            this.time = setTimeout(()=>{
                let obj = {
                    id:this.goodmsg.id,
                    img:this.goodmsg.img,
                    name:this.goodmsg.name,
                    pricr:this.goodmsg.newPrice,
                    isSelect:false
                }
                this.$store.commit("footprint/add",obj)
            },3000)
        },
        beforeDestroy(){
            clearTimeout(this.time)
        }
    }
</script>

<style lang="scss" scoped>
.page{
    background-color: #f0f0f0;
    width: 100%;
    padding-bottom: 80px;
}
.tag{
    position: relative;
    .like{
           position: absolute;
            top: 10px;
            right: 10px;
            background-color: rgba(0,0,0,.5);
            width: 80px;
            height: 30px;
            padding-left: 15px;
            padding-top: 5px;
            box-sizing: border-box;
            border-radius: 15px;
            z-index:999;
            .van-icon{
                margin-right: 10px;
            }
    }
    .return{
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: rgba(0,0,0,.5);
        width: 30px;
        height: 30px;
        padding-left: 3px;
        padding-top: 5px;
        box-sizing: border-box;
        border-radius: 50%;
        z-index:999;
    }
}
    .contain{
        background-color: #fff;
        padding: 10px ;
        box-sizing: border-box;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 10px;
        .newPrice{
            font-size: 16px;
            // font-weight: 550;
            margin: 0 5px;
            color: #333;
        }
        .oldPrice{
            color: dimgrey;
            text-decoration: line-through;
            font-size: 12px;
        }
        .zk{
            font-size: 12px;
            color: dimgrey;
            margin-left: 5px;
            color:#333
        }
        .name{
            font-size: 12px;
            // font-weight: 550;
            color: #424242;
            padding: 0 15px;
        }
        .brand{
            font-size: 12px;
            color: darkorchid;
            padding-left: 15px;
        }
    }
    .van-cell{
        height: 44px;
        img{
            height: 14px;
            padding-top: 5px;
            margin-right: 10px;
        }
    }
    .select{
        background:#fff;
        padding: 0 10px;
        h2{
            font-weight: normal;
            font-size: 18px;
        }
        .size{
            .van-button{
                padding-left: 40px ;
                padding-right:40px ;
                margin:  10px;
            }
        }
        .color{
            .van-button{
                margin: 0 5px;
            }
        }
    }
    .detail{
        margin-top: 10px;
        background-color: #fff;
        padding:0 10px ;
        .van-col{
            padding: 5px;
            font-size: 12px;
        }
    }
    .detail_msg{
        h2{
            font-size: 16px;
            font-weight: normal;
            padding-left: 10px ;
        }
        img{
            width: 100%;
        }
    }
    .end{
        text-align: center;
        font-size: 16px;
        padding: 20px 0;
    }
    .fix{
        position:fixed;
        bottom: 0;
        height: 80px;
        width: 100%;
        background-color: #fff;
        z-index: 999;
        ul{
            width: 100%;
            height: 80px;
            line-height: 80px;
             li{
                float: left;
                text-align: center;
            }
            li:first-child{
                width: 20%;
                padding:10px 0;
                box-sizing: border-box;
            }
            li:nth-child(2){
                width: 30%;
                padding-right:10px ;
                box-sizing: border-box;
                padding-top: 10px;
                position: relative;
                .van-button{
                    font-size: 28px;
                }
                .tag{
                    position: absolute;
                    top: 10px;
                    left: 50%;
                    width: 18px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    font-size: 12px;
                    color: #ffffff;
                    border-radius: 50%;
                    text-align: center;
                    background-color: red;
                }
            }
            li:nth-child(3){
                width: 50%;
            }
        }
       
    }
    

</style>