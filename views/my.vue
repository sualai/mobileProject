<template>
  <div>
    <div class="header">
      <van-nav-bar @click-left="$router.push('/home')">
        <template #title>个人中心</template>
        <template #left>
          <van-icon name="home-o"  size="20" color="#5e5b5b" />
          
        </template>
        <template #right>
          <van-icon name="setting-o" @click="$router.push('/setting')" size="20" color="#5e5b5b" />
          <van-icon name="comment-o"  @click="$router.push('/message')" size="20" color="#5e5b5b" />
        </template>
      </van-nav-bar>
      <div class="userMsg">
        <div class="demo-preview" v-if="$store.state.username">
           <van-image
              round
              width="48px"
              fit="cover"
              :src="require('../assets/images/isLogin.jpg')"
            />
          <div class="demo-content">
            <p>{{$store.state.username}}</p>
            <span class="tag">银卡会员 250 V</span>
          </div>
        </div>
        <div class="demo-preview" v-else>
          <van-image
              round
              width="48px"
              fit="cover"
              :src="require('../assets/images/unLogin.jpg')"
            />
          <div class="demo-content">
            <p class="login">
              <router-link to="/register">注册</router-link>/
              <router-link to="/login">登录</router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="my_message">
        <van-row>
          <van-col span="8">
            <p v-if="$store.state.like.list.length&&$store.state.username!=''"> {{ $store.state.like.list.length }}</p>
            <p v-else>--</p>
            <span @click="$router.push('/like')">商品收藏</span>
          </van-col>
          <van-col span="8">
            <p v-if="$store.state.evaluation.list.length&&$store.state.username!=''"> {{ $store.state.evaluation.list.length }}</p>
            <p v-else>--</p>
            <span @click="$router.push('/evaluation')">我的评价</span>
          </van-col>
          <van-col span="8" @click="$router.push('/footprint')">
          <p v-if="$store.state.footprint.list.length&&$store.state.username!=''"> {{ $store.state.footprint.list.length }}</p>
            <p v-else>--</p>
            <span>我的足迹</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="content">
        <van-notice-bar background = "#f0f0f0" color="#ccc" text="防诈骗必读攻略" left-icon="volume-o" />
        <div class="order_msg">
            <van-grid column-num="4">
                <van-grid-item @click="$router.push('/order/orderUnpay')" icon="balance-pay" text="待付款" />
                <van-grid-item @click="$router.push('/order/orderEnd')" icon="logistics" text="待收货" />
                <van-grid-item @click="$router.push('/order/orderComplete')" icon="edit" text="待评价" />
                <!-- <van-grid-item  icon="after-sale" text="退换/售后" /> -->
                <van-grid-item @click="$router.push('/order/orderAll')" icon="records" text="全部订单" />
            </van-grid>
        </div>
        <div class="order_msg">
            <van-grid >
                <van-grid-item icon="coupon-o" @click="$router.push('/coupon')" text="优惠券" />
                <van-grid-item icon="points" @click="$router.push('/money')"  text="淘饰币" />
                <van-grid-item @click="$router.push('/address')" icon="location-o" text="我的地址" />
                <van-grid-item @click="$router.push('/serve')" icon="service-o" text="饰客服" />
            </van-grid>
        </div>
        <div class="goods">
            <h3 class="title">精选推荐</h3>
            <jt-list :jxlist = "jxlist"></jt-list>
        </div>
    </div>
  </div>
</template>

<script>
import jtList from "../components/public/jtList.vue"
export default {
  data() {
    return {
      avatar: true,
      title: true,
      jxlist:[ ]
    };
  },
  methods: {},
  components:{
      jtList
  },
  created() {
    this.$store.state.showTop = false;
    this.$store.state.showBottom = false;
    Object.assign(this.jxlist,this.$store.state.clothing.tj)
  }
};
</script>

<style lang="scss" scoped>
.header {
   background-image: linear-gradient( #f8e1f4,#fff0f5,#f7f7f7);
   padding-bottom: 20px;
   .van-nav-bar{
       background-color: transparent;
   }
  .van-icon-arrow-left,
  .van-icon {
    color: #5e5b5b;
    font-size: 28px;
    font-weight: 100;
  }
  .van-nav-bar__right {
    .van-icon {
      margin: 0 10px;
    }
  }
  .userMsg {
    padding: 20px 10px;
    box-sizing: border-box;
    .demo-preview {
      display: flex;
      padding: 0 24px;
      .demo-content {
        padding-left:15px ;
        text-align: center;
        .login {
          font-size: 16px;
          // font-weight: 600;
          padding-top: 15px;
          a {
            color: #5e5b5b;
            margin: 0 10px;
          }
        }
        p {
          // margin: 13px 0 0;
          margin: 0;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 5px;
          color: #5e5b5b;
        }
        .tag {
          padding: 5px;
          border-radius: 10px;
          background-color: lightblue;
          font-size: 10px;
          color: #fff;
        }
      }
    }
  }
  .my_message{
      padding: 0 15px;
      text-align: center;
      color: #4e4e50;
      p{
          margin: 0;
          padding: 0;
          font-size: 18px;
      }
      span{
          font-size: 14px;
      }
  }
}
.content{
    background-color: #f0f0f0;
    .order_msg{
        background-color: #f0f0f0;
        padding: 10px;
        box-sizing: border-box;
        .van-grid{
            border-radius: 10px;
            overflow: hidden;
        }
    }
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
            content: " - ";
            font-size: 30px;
        }
    }  
}
</style>