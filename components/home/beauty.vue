<template>
  <div>
    <div class="top_img">
      <img src="../../assets/images/beauty_bg.webp" alt />
      <img src="../../assets/images/beauty_bg2.webp" alt />
    </div>
    <div class="tj" @click="$router.push({path:'/goodsBrand',query:{id:'suit'}})">
      <van-row>
        <van-col span="8">
          <img src="../../assets/images/beauty_tj1.webp" alt />
        </van-col>
        <van-col span="8">
          <img src="../../assets/images/beauty_tj2.webp" alt />
        </van-col>
        <van-col span="8">
          <img src="../../assets/images/beauty_tj3.webp" alt />
        </van-col>
        <van-col span="8">
          <img src="../../assets/images/beauty_tj4.webp" alt />
        </van-col>
        <van-col span="8">
          <img src="../../assets/images/beauty_tj5.webp" alt />
        </van-col>
        <van-col span="8">
          <img src="../../assets/images/beauty_tj6.webp" alt />
        </van-col>
      </van-row>
    </div>
    <div class="mastor">
      <img src="../../assets/images/h_titile.webp" alt />
      <nav-list :navlist="navlist"></nav-list>
    </div>
    <div class="jx">
        <h2 class="title">精选专场</h2>
        <img src="../../assets/images/b_jx1.webp" alt="">
        <img src="../../assets/images/b_jx2.webp" alt="">
    </div>
    <div class="brand">
        <p class="title">每天早10点 · 晚8点上新</p>
        <brand :brandlist="brandlist"></brand>
    </div>
  </div>
</template>

<script>
import navList from "../public/navList.vue";
import brand from "../public/brand"
export default {
  data() {
    return {
      navlist: [
        {
          img: require("../../assets/images/b_nav1.png"),
          name: "护肤套装"
        },
        {
          img: require("../../assets/images/b_nav2.png"),
          name: "面膜"
        },
        {
          img: require("../../assets/images/b_nav3.png"),
          name: "防晒"
        },
        {
          img: require("../../assets/images/b_nav4.png"),
          name: "精华"
        },
        {
          img: require("../../assets/images/b_nav5.png"),
          name: "洁面卸妆"
        },
        {
          id:'beauty',
          img: require("../../assets/images/b_nav6.png"),
          name: "彩妆"
        },
        {
          img: require("../../assets/images/b_nav7.png"),
          name: "唇膏"
        },
        {
          img: require("../../assets/images/b_nav8.png"),
          name: "洗护"
        }
      ],
      brandlist:[
        {
          id:'beauty',
          img:require("../../assets/images/b_brand1.jpg"),
          name:'希思黎SISLEY化妆品-长档期专场',
          price:'5.8'
        },
        {
          id:'suit',
          img:require("../../assets/images/b_brand2.jpg"),
          name:'嘉媚乐CAMENAE美容护肤专场',
          price:'1.7'
        },
        {
          id:'beauty',
          img:require("../../assets/images/b_brand3.jpg"),
          name:'蓝色之恋BLUE LOVE彩妆香水专场',
          price:'0.7'
        },
        {
          id:'beauty',
          img:require("../../assets/images/b_brand4.jpg"),
          name:'自然旋律护肤个护专场',
          price:'2.9'
        },
        {
          id:'suit',
          img:require("../../assets/images/b_brand5.jpg"),
          name:'Dior/Armani/YSL/Mistine等彩妆香水专场',
          price:'1.3'
        },
        {
          id:'suit',
          img:require("../../assets/images/b_brand6.jpg"),
          name:'雅芳AVON化妆品专场',
          price:'1.4'
        },
        {
          id:'suit',
          img:require("../../assets/images/b_brand7.jpg"),
          name:'膜玉Candy Moyo彩妆香水专场',
          price:'1.4'
        },
        {
          id:'beauty',
          img:require("../../assets/images/b_brand8.jpg"),
          name:'汇美舍护肤个护专场',
          price:'1.8'
        }
      ]
    };
  },
  methods: {},
  components: {
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
.top_img {
  width: 100%;
  font-size: 0;
  img {
    width: 100%;
  }
}
.tj {
  .van-col {
    img {
      width: 100%;
    }
  }
}
.jx ,
.mastor {
  background-color: #f0f0f0;
  color: #434343;
  img {
    width: 100%;
  }
}
.jx {
    padding-top: 20px;
    .title{
        font-weight: normal;
        font-size: 18px;
        text-align: center;
        position: relative;
        margin-top: 0;
        &::before,
        &::after{
            content: "";
            display: block;
            width: 50px;
            border-top:2px solid #ccc ;
            position: absolute;
            top: 50%;
            left: 50%;
        }
        &::before{
            margin-left: -100px;
        }
        &::after{
            margin-left: 50px;
        }
    }
}
.brand{
    width: 100%;
    background-color: #f0f0f0;
    .title{
        text-align: center;
        margin: 0;
        padding: 10px 0;
    }
}
</style>