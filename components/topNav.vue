<template>
  <div id="page" ref="topPage">
    <div class="nav">
      <div class="message">
        <i class="iconfont icon-yunliankeji-" @click="$router.push('/message')"></i>
      </div>
      <div class="search">
        <div class="searchBox">
          <van-search shape="round" @focus="searchChange" background="transparent" placeholder="请输入搜索关键词" />
        </div>
      </div>
      <div class="cagory">
        <router-link to="/category" tag="i" class="iconfont icon-jinrituijian"></router-link>
      </div>
    </div>
    <div ref="scrollbox" class="routerNav">
      <ul class="clearfix">
        <li v-for="(item,index) in topNav" :key="index" :class="{con:conId==index}" @click="select(index)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      topNav: [
        "今日推荐",
        "美容美妆",
        "最新女装",
        "潮流男装",
        "品牌内衣",
        "鞋靴",
        "换季减价"
      ],
      goRouter:['/home','/beauty','/female','/male','/underwear','/shoes','/season'],
      conId:0
    };
  },
  methods: {
    _initScroll() {
      this.scrollX = new BScroll(this.$refs.scrollbox, {
        scrollY: false,
        scrollX: true,
        click: true,
        probeType: 3
      });
    },
    select(i){
        this.conId = i
        this.$router.push(this.goRouter[i])
    },
    searchChange(){
      this.$router.push('/search')
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  watch:{
    "$route"(newrouter){
      this.conId =  this.goRouter.findIndex(item=>{
        return item == newrouter.path
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#page {
  background-color: pink;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.nav {
  display: flex;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  .cagory,
  .message {
    width: 80px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    box-sizing: border-box;
    & > i {
      font-size: 30px;
      color: #fff;
    }
  }
  .search {
    flex: 1;
  }
}
.routerNav {
  width: 100%;
  height: 40px;
  overflow: hidden;
  ul {
    height: 40px;
    width: 640px;
    &::after{
      content: "";
      display: block;
      clear: both;
      height: 0;
    }
    li {
      width: 80px;
      height: 40px;
      float: left;
      color: #fff;
      text-align: center;
      // margin: 0 5px;
      padding: 8px;
      font-size: 14px;
       box-sizing: border-box;
      &.con {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 5px;
      }
    }
  }
}
</style>