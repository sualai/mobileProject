<template>
  <div class="page">
    <!-- 头部 -->
    <van-sticky>
        <van-nav-bar @click-left="$router.go(-1)" :title="title">
        <template #left>
            <van-icon name="arrow-left" color="#454545" size="20" />
            <span></span>
        </template>
        <template #right>
            <van-icon name="comment-o" color="#454545" @click="$router.push('/message')" size="20" />
        </template>
        </van-nav-bar>
    </van-sticky>
    <!-- 头部end -->
    <div class="tj">
      <h3>爆品推荐</h3>
      <!--轮播图  -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in gblist" :key="index" @click="$router.push({path:'/detail',query:{id:item.id}})">
            <!-- <img :src="item.img" alt /> -->
            <van-image
              width="100%"
              fit="contain"
              :src="item.img"
              />
            <p class="name">{{item.name}}</p>
            <div class="price">
              <!-- <van-tag round color="#ef95f7" size="small">快抢价</van-tag> -->
              <span class="new_price">￥{{item.newPrice}}</span>
              <span class="old_price">￥{{item.oldPrice}}</span>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
      <!-- 轮播图end -->
    </div>
    <!-- 筛选 -->
    <van-sticky offset-top="40">
      <div ref="parent">
        <van-row >
        <van-col span="6" >
          <span class="sel ">
            价格
          </span>
          <span>
            <van-icon name="arrow-up" @click="selectPrice(1,$event)" />
            <van-icon name="arrow-down"  @click="selectPrice(2,$event)" />
          </span>
        </van-col>
        <van-col span="6">
          <span class="sel"  >折扣</span>
          <span>
            <van-icon name="arrow-up"  @click="selectPrice(3,$event)" />
            <van-icon name="arrow-down" @click="selectPrice(4,$event)" />
          </span>
        </van-col>
        <van-col span="6">
          <span class="con1" @click="sales(1,$event)" >销量</span>
        </van-col>
        <van-col span="6">
          <!-- @click="sales(2,$event)" -->
          <span class="con1" @click="sales(2,$event)" >随机</span>
          <van-icon name="filter-o" />
        </van-col>
      </van-row>
      </div>
    </van-sticky>

   

    <!-- 筛选end -->
    <jt-list :jxlist="jxlist"></jt-list>

  </div>
</template>

<script>
import Swiper from "swiper";
import jtList from "../components/public/jtList";
export default {
  data() {
    return {
        title:'',
        show:false,
        gblist:[],
        jxlist: []
    }
  },
  methods: {
    _initSwiper() {
      new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true
      });
    },
    selectPrice(index,event){
      let sel =  this.$refs.parent.getElementsByClassName('sel')

      for(let i = 0 ; i < sel.length ; i ++){
        sel[i].classList.remove('con')
        for(let j = 0 ; j < sel[i].nextElementSibling.children.length ; j ++){
            sel[i].nextElementSibling.children[j].classList.remove('con')
        }
      }
      event.target.parentElement.parentElement.children[0].classList.add('con')
      event.target.classList.add('con')


    
      if(index == 1){ //价格从高到低
        this.jxlist.sort((a,b)=>{
            return b.newPrice - a.newPrice  
        })
      }else if(index == 2){ //价格从低到高
        this.jxlist.sort((a,b)=>{
            return a.newPrice - b.newPrice 
        })
      }else if(index == 3){ //折扣从大到小 ---> 折扣数越小，折扣力度越大
         this.jxlist.sort((a,b)=>{
            return a.zk - b.zk 
        })
      }else{ //折扣从小到大 ---> 折扣数越小，折扣力度越大
        this.jxlist.sort((a,b)=>{
            return b.zk - a.zk 
        })
      }

    },
    sales(index,event){
      let sel =  this.$refs.parent.getElementsByClassName('sel')
      for(let i = 0 ; i < sel.length ; i ++){
        let sel =  this.$refs.parent.getElementsByClassName('sel')

        for(let i = 0 ; i < sel.length ; i ++){
          sel[i].classList.remove('con')
          for(let j = 0 ; j < sel[i].nextElementSibling.children.length ; j ++){
              sel[i].nextElementSibling.children[j].classList.remove('con')
          }
        }
      }
      let sal = this.$refs.parent.getElementsByClassName('con1')
      for(let j = 0 ; j < sal.length ; j ++){
        sal[j].classList.remove('con')
      }
      event.target.classList.add('con')


      if(index == 1){ // 按销量排序 旧价-新价 越大销量越好
          this.jxlist.sort((a,b)=>{
            return (b.oldPrice - b.newPrice) - (a.oldPrice - a.newPrice) 
          })
      }else{ //自动筛选 -->随机
          this.jxlist.sort(()=>{
            return (Math.random()*10-5)
          })
      }
    }

  },
  components: {
    jtList
  },
  created() {
    this.$store.state.showTop = false;
    
    if(this.$route.query.id == 'suit'){
      this.title = '护肤彩妆'
      this.$store.state.brand.beauty.forEach((item,index)=>{
         if(index > 10 && index < 20){
            this.gblist.push(item)
          }
          if(index < 16){
            this.jxlist.push(item)
          }else {
            return 
          }
      })
    }else if(this.$route.query.id == 'beauty'){
      this.title = '美容护肤'
      this.$store.state.brand.beauty.forEach((item,index)=>{
         if(index > 8 && index < 18){
            this.gblist.push(item)
          }
          if(index > 16 ){
            this.jxlist.push(item)
          }
      })
    }else {
      this.title = '品牌服装'
      Object.assign(this.gblist,this.$store.state.clothing.tj)
      Object.assign(this.jxlist,this.$store.state.clothing.nvlist)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initSwiper();
    });
  },
};
</script>

<style lang="scss" scoped>
.page {
  background-color: #f0f0f0;
}
.van-nav-bar__right {
  .van-icon {
    margin-right: 10px;
  }
}
.tj {
  h3 {
    font-size: 16px;
    padding: 10px;
    font-weight: 550;
  }
  margin-bottom: 10px;
}

.swiper-slide {
  text-align: left;
  width: 150px;
  background-color: rgba(255, 255, 255);
  padding: 0 0 10px 0;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 150px;
    width: 100%;
    border-radius: 10px;
  }
  .price {
    margin-top: 5px;
    margin-left: 10px;
    .new_price {
      // font-weight: 600;
      font-size: 14px;
      color: #424242;
    }
    .old_price {
      color: #5e5b5b;
      text-decoration: line-through;
      margin-left: 5px;
      font-size: 12px;
    }
   
  }
  .name {
    padding: 0 0px 0 10px;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 12px;
    color: #5e5b5b;
    overflow: hidden;
    text-overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.van-sticky {
  .van-row {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    background-color: #fff;
    .van-col {
      font-size: 14px;
      color: #5e5b5b;
      
      .con{
        color: #EF95F7;
      }
      span {
        display: inline-block;
        vertical-align: top;
        // font-size: 12px;
        .van-icon {
          display: block;
          margin-left: 5px;
          margin-bottom: -5px;
        }
      }
    }
  }
}

</style>