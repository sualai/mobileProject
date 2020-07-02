import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from "./cart"
import address from "./address"
import order from "./order"
import footprint from "./footprint"
import like from "./like"
import evaluation from "./evaluation" 

import brand from "./brand"
import goodlist from "./goodlist"
import clothing from "./clothing"


export default new Vuex.Store({
  state: {
    username:'',        // 用户名
    showTop:true,       // 显示头部
    showBottom:true,    // 显示整个底部
    showMy:true,        // 显示底部个人中心
    showLike:true,      // 显示底部收藏
    showCart:true,      // 显示底部购物车
    previouseRouter:''  // 跳转前路由-->是否返回的式商品详情
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,       //购物车
    address,    //地址
    order,      // 订单
    footprint,  // 足迹
    like,       // 收藏
    evaluation, // 评价
    

    brand,     // 品牌商品 
    goodlist,  // 全部商品
    clothing   // 衣物商品
    
  }
})
