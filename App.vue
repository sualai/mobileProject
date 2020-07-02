<template>
  <div id="app">
    <!-- f3d5f3 主题颜色 -->
    <van-sticky  v-show="$store.state.showTop">
        <top-nav ></top-nav>
    </van-sticky>
    
    <router-view></router-view>
    <div class="tabFix" v-show="$store.state.showBottom">
      <ul>
        <li class="iconfont icon-renwu" v-show="$store.state.showMy" @click="$router.push('/my')"></li>
        <li class="iconfont icon-like" @click="$router.push('/like')" v-show="$store.state.showLike"></li>
        <li class="iconfont icon-gouwuche cart" v-show="$store.state.showCart" @click="$router.push('/cart')">
            <div class="tag" v-show="$store.state.cart.cartList.length">{{ $store.state.cart.cartList.length }}</div>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>
import topNav from "./components/topNav.vue"
export default {
  data(){
    return{}
  },
  methods:{},
  components:{
    topNav
  }
};
</script>

 <style lang="scss" scope>

body{
  background-color: #fff;
}
.tabFix {
  position: fixed;
  bottom: 5px;
  left: 5px;
  border-radius: 5px;
  height: 50px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  ul {
    height: 50px;
    padding: 5px 0;
    box-sizing: border-box;
    & > li {
      float: left;
      height: 40px;
      width: 50px;
      font-size: 30px;
      line-height: 40px;
      text-align: center;
      color: #ffffff;
      border-right: 1px solid rgba(255, 255, 255, 0.18);
      box-sizing: border-box;
      &:last-child {
        border-right: 0;
      }
    }
  }
  .cart{
    position: relative;
  }
  .tag {
    position: absolute;
    top: -8px;
    left: 32px;
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
</style>
