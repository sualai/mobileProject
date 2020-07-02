import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "./routes/home"
import my from "./routes/my"
import category from "./routes/category"
import search from "./routes/search"
import brand from "./routes/brand"
import goodsBrand from "./routes/goodsBrand"
import cart from "./routes/cart"
import detail from "./routes/detail"
import order from "./routes/order"
import guilder from "./routes/guilder"
import address from "./routes/address"
  const routes = [
    {
      path:'/',
      redirect:'/adverpage'
    },
    ...home,   // 首页
    category,  //分类页
    brand,      // 品牌分类页
    goodsBrand, // 品牌商品页
    ...my,      // 个人中心
    search,    // 搜索
    cart,      // 购物车
    detail,    // 详情
    ...order,   // 订单
    ...guilder,  //引导页+广告
    ...address   //地址
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
