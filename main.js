import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import "./assets/font/iconfont.css"
import 'vant/lib/index.css';
import "./assets/reset/reset.css"
import "../node_modules/_swiper@5.4.1@swiper/css/swiper.min.css"
Vue.use(Vant);

 // 使用后端接口 
import axios from "axios"
Vue.prototype.$axios = axios 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
