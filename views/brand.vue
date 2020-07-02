<template>
  <div>
    <div class="header" ref="totalHeight" >
       <van-sticky>
          <div ref="header">
            <van-row  class="clearfix" >
            <van-col span="8">
              <div  :class="{con:topId==0}" @click="topId=0">
                <img src="../assets/images/brand_qbd.webp" alt />
              </div>
            </van-col>
            <van-col span="8">
              <div :class="{con:topId==1}" @click="topId=1">
                <img src="../assets/images/brand_daianfen.webp" alt />
              </div>
            </van-col>
            <van-col span="8">
              <div :class="{con:topId==2}" @click="topId=2">
                <img src="../assets/images/brand_ouxie.webp" alt />
              </div>
            </van-col>
            <!-- <van-col span="6">
              <div :class="{con:topId==3}" @click="topId=3">
                <img src="../assets/images/brand_logo4.webp" alt />
              </div>
            </van-col> -->
          </van-row>
          </div>
      </van-sticky>
      <div class="img" ref="ttop">
        <img src="../assets/images/brand_vip_bg.webp" alt />
        <img src="../assets/images/brand_vip.webp" alt />
      </div>
    </div>
      <div class="parent">
        <div class="scrollContent" ref="scroll">
          <div ref="left" class="left">
            <ul>
              <li v-for="(item,index) in left" :key="index" @click="selectItem(index,$event)" :class="{con:conId==index}" >{{item}}</li>
            </ul>
          </div>
          <div class="right" ref="right">
              <div class="null">
                  <div class="right-items-hook"  v-for="(itemRight,indexRight) in right " :key="indexRight+99"  >
                    <h1 class="itemTitle" >{{left[indexRight]}}</h1>
                    <van-row class="clearfix">
                      <van-col span="12" v-for="(item,index) in itemRight" :key="index">
                          <div class="van_box"  @click="$router.push({path:'/detail',query:{id:item.id}})">
                              <img :src="item.img" alt="">
                              <van-tag round size="small"  color="#f4a1dc">疯抢价</van-tag>
                              <span>￥{{item.newPrice}}</span>
                              <p class="name" >{{item.name}}</p>
                          </div>
                      </van-col>
                  </van-row>
                  </div>
              </div>
          </div>
        </div>
    </div>
    <div class="fix" @click="$router.push('/home')">
            <van-icon name="wap-home-o" size="38" />
        </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      i:0,
      conId:0,
      topId:0,
      flag:false,
      left:[],
      listHeight:[],
      right: [
        {
          img: require("../assets/images/jx1.jpg"),
          newPrice: 779,
          oldPrice: 1890,
          zk: 5.3,
          name: "小雏菊连衣裙女夏碎花雪纺裙子法式桔梗裙森系仙女裙2020新款"
        },
        {
          img: require("../assets/images/jx2.jpg"),
          newPrice: 779,
          oldPrice: 1890,
          zk: 5.3,
          name: "小雏菊连衣裙女夏碎花雪纺裙子法式桔梗裙森系仙女裙2020新款"
        }
      ]
    };
  },
  methods:{
      _initScroll(){
          this.lefts = new BScroll(this.$refs.left, {
            click: true, // 拥有触发事件
            probeType: 3
        });
        this.rights = new BScroll(this.$refs.right, {
            click:true,
            probeType: 3
        });
      },
     selectItem(index,event) {
       this.conId = index
      if (!event._constructed) {
        return ;
      }else {
        let rightItems = this.$refs.right.getElementsByClassName("right-items-hook");
      
        let el = rightItems[index];
        let offsetY = this.$refs.totalHeight.offsetHeight - this.$refs.header.offsetHeight
        this.rights.scrollToElement(el,0,0, -offsetY)
       
      }
    }
  },
  created() {
    this.$store.state.showTop = false;
    this.$store.state.showBottom = false
    let brand = this.$store.state.brand
    
    Object.assign(this.left,brand.left[0])
    Object.assign(this.right,brand.right[0])
  },
  mounted(){
      this.$nextTick(()=>{
          this._initScroll()
         this.$refs.scroll.style.height = window.innerHeight-this.$refs.header.offsetHeight +'px'
      })
  }
};
</script>

<style lang="scss" scoped>

.header {
  .van-row {
    background-image: url("../assets/images/brand_vip_bg1.webp");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .van-col--8 {
    padding:0 10px;
    box-sizing: border-box;
    & > div {
      background-color: #fff;
      border-radius: 5px;
      text-align: center;
      padding: 10px 0;
      &.con {
        background-color: #faeee7;
      }
      img {
        width: 100%;
        transform: scale(.98);
      }
    }
  }
  .img {
    width: 100%;
    font-size: 0;
    img {
      width: 100%;
    }
  }
}
.parent{
  position: relative;
}

.scrollContent {
  display: flex;
  position: absolute;
  top: 0px;
  bottom: 0;
  width: 100%;
  // height: 600px;
  overflow: hidden;
  // width: 100%;
  .left {
    flex: 0 0 80px;
    width: 80px;
    text-align: center;
    background-color: #ffd8a6;
    li {
      height: 80px;
      color: #fff;
      font-size: 16px;
      padding:17px 16px;
      width: 100%;
      box-sizing: border-box;
      border-left: 3px solid transparent;
      &.con {
        background-color: #ff427f;
        border-left: 3px solid #ffffff;
        box-sizing: border-box;
      }
    }
  }
  .right {
    flex: 1;
    box-sizing: border-box;
    background-color: #faeee7;
    &>div{
        width: 100%;
        // height: 1000px;
        .van_box{

            width: 100%;
            background-color: #fff;
            transform: scale(.9);
            padding-bottom: 10px;
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
                padding: 0 5px;
                margin: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;

            }
        }
    }
    .itemTitle{
        text-align: center;
        font-weight: normal;
        font-size: 16px;
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
</style>