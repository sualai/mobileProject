<template>
    <div>
    <div class="tem">
      
      <div class="brand_list" v-for="(item,index) in brandlist" :key="index" @click="$router.push({path:'/goodsBrand',query:{id:item.id}})">
          <img :src="item.img" alt="">
          <h2 class="brand_title">{{item.name}}</h2>
          <p> <span class="price">{{item.price}}</span>折起</p>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods:{},
        props:["brandlist"]
    }
</script>

<style lang="scss" scoped>
.tem {
    width: 100%;
    background-color: #f0f0f0;
    padding: 0 10px;
    box-sizing: border-box;
  
  .brand_list{
      width: 100%;
      background-color: #fff;
      margin-bottom: 10px;
      border-radius: 15px;
      padding-bottom: 20px;
      h2{
         padding: 0 0 0 10px ;
         margin-bottom: 5px;
         font-size: 14px;
      }
      p{
          margin: 0;
          padding: 0 0 0 10px ;
          
          font-size: 14px;
          color: #c3c3c3;
          .price{
              color: palevioletred;
          }
      }
      img{
          width: 100%;
          border-radius: 15px;
      }
  }
  
}
</style>