<template>
  <div class="page">
    <!-- 轮播 -->
    <div class="bg_pink">
      <loop :img="imglist"></loop>
      <van-row class="clearfix">
        <van-col span="8">
          <van-icon name="certificate" />100%正品
        </van-col>
        <van-col span="8">
          <van-icon name="free-postage" />首单38元免邮
        </van-col>
        <van-col span="8">
          <van-icon name="thumb-circle-o" />退换无忧
        </van-col>
      </van-row>
    </div>
    <!-- 轮播end -->
    <!-- 菜单导航 -->
     <div class="nav"> 
       <nav-list :navlist="navlist"></nav-list>
     </div>
     <!-- 菜单导航end -->
     <!-- 大品牌 -->
    <div class="vipBox" @click="$router.push('/brand')">
        <div class="vip_top">
            <img src="../assets/images/jty_logo.webp" alt />
        </div>
        <ul class="vip_img_lsit clearfix">
            <li>
                <img src="../assets/images/vip1.webp" alt />
            </li>
            <li>
                <img src="../assets/images/vip2.webp" alt />
            </li>
            <li>
                <img src="../assets/images/vip3.webp" alt />
            </li>

        </ul>
    </div>
    <!-- 大品牌end -->
    <!-- 品牌疯抢 -->
    <div class="brand clearfix" @click="$router.push('/brand')">
      <img src="../assets/images/pinp_bg.png" alt="">
      <van-row class="clearfix">
        <van-col offset="1" span="6">
          <img src="../assets/images/brand1.jpg" alt />
          <img src="../assets/images/brand_logo1.png" alt />
          <div class="btn_box">
            <span>时尚女装</span>
          </div>
        </van-col>
        <van-col offset="1" span="6">
          <img src="../assets/images/brand2.jpg" alt />
          <img src="../assets/images/brand_logo2.png" alt />
          <div class="btn_box">
            <span>名牌好包</span>
          </div>
        </van-col>
        <van-col offset="1" span="6">
          <img src="../assets/images/brand3.jpg" alt />
          <img src="../assets/images/brand_logo3.png" alt />
          <div class="btn_box">
            <span>儿童专场</span>
          </div>
        </van-col>
      </van-row>
    </div>
    <!-- 品牌疯抢end -->
    <!-- 低价疯抢 -->
    <div class="tj clearfix" @click="$router.push('/brand')">
      <img src="../assets/images/dj_bg.png" alt="">
        <van-row class="clearfix">
        <van-col  offset="1" span="4">
          <img src="../assets/images/kq1.jpg" alt />
          <img src="../assets/images/dj_brand1.png" alt="">
          <div class="btn_box">
            <span>运动设备</span>
          </div>
        </van-col>
        <van-col  offset="1" span="4">
          <img src="../assets/images/kq2.jpg" alt />
          <img src="../assets/images/dj_brand2.png" alt="">
          <div class="btn_box">
            <span>护肤套装</span>
          </div>
        </van-col>
        <van-col  offset="1" span="4">
          <img src="../assets/images/kq3.jpg" alt />
          <img src="../assets/images/dj_brand3.png" alt="">
          <div class="btn_box">
            <span>儿童T恤</span>
          </div>
        </van-col>
        <van-col offset="1"  span="4">
          <img src="../assets/images/kq4.jpg" alt />
          <img src="../assets/images/dj_brand4.png" alt="">
          <div class="btn_box">
            <span>精美配饰</span>
          </div>
        </van-col>
      </van-row>
    </div>
    <!-- 低价疯抢end -->
    <!-- 品牌组件 -->
    <div class="brand_com"> 
      <div class="title">
          <img src="../assets/images/title.jpg" alt="">
      </div>
        <brand :brandlist="brandlist"></brand>
    </div>
    <!-- 品牌组件end -->
  </div>
</template>
<script>
import loop from "../components/public/loop";
import navList from "../components/public/navList";
import brand from "../components/public/brand"
export default {
  data() {
    return {
      imglist: [
        { img: require("../assets/images/jloop1.webp") },
        { img: require("../assets/images/jloop2.webp") },
        { img: require("../assets/images/jloop3.webp") },
        { img: require("../assets/images/jloop4.webp") }
      ],
      navlist: [
        {
          img: require("../assets/images/jnav1.webp"),
          name: "夏日新款"
        },
        {
          img: require("../assets/images/jnav2.webp"),
          name: "男装"
        },
        {
          img: require("../assets/images/jnav3.webp"),
          name: "鞋包"
        },
        {
          img: require("../assets/images/jnav4.webp"),
          name: "内衣"
        },
        {
          img: require("../assets/images/jnav7.webp"),
          name: "户外活动"
        },
        {
          img: require("../assets/images/jnav9.webp"),
          name: "防晒彩妆"
        },
        {
          img: require("../assets/images/jnav8.webp"),
          name: "母婴童装"
        },
        {
          img: require("../assets/images/jnav6.webp"),
          name: "清仓"
        }
      ],
      brandlist:[
          {
              id:'cloth',
              img:require("../assets/images/finity_brand.jpg"),
              name:"菲尼迪FINITY&依兰女装-今日大牌专场",
              price:"0.5"
          },
          {
              id:'cloth',
              img:require("../assets/images/adidas_brand.jpg"),
              name:'阿迪达斯-鞋服专场',
              price:'0.9'
          },
          {
              id:'cloth',
              img:require("../assets/images/annil_brand.jpg"),
              name:'安奈儿Annil童装今日大牌-6.1儿童节',
              price:'1.9'
          },
          {
              id:'cloth',
              img:require("../assets/images/crocs_brand.jpg"),
              name:'Crocs卡洛驰 舒适男女鞋-好货直降专场',
              price:'3.4'
          },
          {
              id:'cloth',
              img:require("../assets/images/mick_brand.jpg"),
              name:'米杰克男装JenMick今日大牌',
              price:'3.5'
          },
          {
              id:'cloth',
              img:require("../assets/images/miss_brand.jpg"),
              name:'MISS Sixty意式潮奢女装今日大牌',
              price:'0.9'
          },
          {
              id:'cloth',
              img:require("../assets/images/puma_brand.jpg"),
              name:'彪马PUMA男女运动&儿童专场',
              price:'0.4'
          }
      ]
    };
  },
  components: {
    loop,
    navList,
    brand
  },
  created(){
    this.$store.state.showTop = true;
    this.$store.state.showBottom = true;
  }
};
</script>

<style lang="scss" scoped>

.page{
  width: 100%;
  overflow: hidden;
}

.bg_pink {
  background-color: pink;
  width: 100%;
  overflow: hidden;
}
.nav{
  background-color: pink;
  color: #ffffff;
}
.van-row {
  padding-top: 5px;
  padding-bottom: 5px;
  box-sizing: border-box;
  .van-col--8 {
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;
    color: #ffffff;
    font-size: 12px;
    .van-icon {
      font-size: 16px;
      vertical-align: middle;
    }
  }
}
.vipBox {
    width: 100%;
    font-size: 0;
    margin: 0;
    padding: 0;
    .vip_top {
        width: 100%;
        min-width: 320px;
        overflow: hidden;
        img{
          width: 100%;
        }
    }
    .vip_img_lsit{
        width: 100%;
        &::after{
            content: "";
            display: block;
            clear: both;
        }
        &>li{
            width: 33.33%;
            float: left;
            &>img{
                width: 100%;
            }

        }
    }

}
.tj,
.brand {
  width: 100%;
  position: relative;
  font-size: 0;
  img{
    width: 100%;
  }
  & > .van-row {
    position:absolute;
    bottom: 25px;
    text-align: center;
    transform: translateX(15px);
    margin: 0px;
    img {
      width: 100%;
      transform: scale(.9);
    }
    img:nth-child(2) {
      transform: scale(0.4);
    }
    .btn_box{
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: hidden;
    }
    span {
      display: inline-block;
      background-color: rgba(231, 180, 180, 0.3);
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 10px;
      -webkit-text-size-adjust: none;
      color: orangered;
    }
  }
}
.tj{
  & > .van-row {
    img{
      transform: scale(1);
    }
  }
}
.brand_com{
  font-size: 0;
  .title{
      width: 100%;
      img{
          width: 100%;
      }
  }
}

</style>