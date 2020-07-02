<template>
    <div class="page">
          <div class="swiper-container guildSwiperContainer">
            <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <!-- <img src="../../assets/images/guild1.jpg" alt=""> -->
                        <van-image
                            height="100%"
                            fit="cover"
                            :src="require('../../assets/images/guild1.jpg')"
                            />
                        <p class="text cloth">时尚大牌</p>
                        <p class="cloth text2">尽在桃依</p>
                    </div>
                    <div class="swiper-slide">
                        <!-- <img src="../../assets/images/guild2.jpg" alt=""> -->
                        <van-image
                            height="100%"
                            fit="cover"
                            :src="require('../../assets/images/guild2.jpg')"
                            />
                        <p class="fation cloth">潮流爆款</p>
                    </div>
                    <div class="swiper-slide">
                        <!-- <img src="../../assets/images/guild3.jpg" alt=""> -->
                        <van-image
                            height="100%"
                            fit="cover"
                            :src="require('../../assets/images/guild3.jpg')"
                            />
                        <p class="new cloth">最新品牌</p>
                        <p class="new2 cloth">更多优惠</p>
                    </div>
                    <div class="swiper-slide">
                        <!-- <img src="../../assets/images/beauty_det.webp" alt=""> -->
                        <van-image
                            height="100%"
                            fit="cover"
                            :src="require('../../assets/images/guild4.jpg')"
                            />
                        
                        <van-button color="linear-gradient(to right, #5986B1, #436D85,#5971B9)" @click="gohome">立即体验</van-button>
                    </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination guildSwiperPagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper" 
    export default {
        methods:{
            gohome(){
                this.$router.push('/home')
            }
        },
        created(){
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
        },
        mounted(){
            this.$nextTick(()=>{
                new Swiper('.guildSwiperContainer',{
                      pagination: {
                        el: '.guildSwiperPagination',
                        dynamicBullets: true,
                    }
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
 .page{
     width: 100%;
     height: 100%;
     position: absolute;
     .swiper-container{
         width: 100%;
         height: 100%;
         overflow: hidden;
         .guildSwiperPagination{
             position: absolute;
             bottom: 20px;
         }
         .swiper-wrapper{
             width: 100%;
             height: 100%;
            //  background-color: #042131;
             img{
                 width: 100%;
             }
             .cloth{
                position: absolute;
                 width: 100%;
                 font-size: 30px;
             }
             .text{ 
                 color:#CFD8D7;
                 transform: rotate(20deg);
                 top:10%;
                //  margin: 0 auto;
             }
             .text2{
                color:#CFD8D7;
                 transform: rotate(-40deg);
                 top: 60%;
                 left: 30%;
             }
             .fation{
                transform: rotate(-20deg);
                top: 30px;
                right: 20px;
                z-index:100;
                color: #f0f0f0;
             }
             .new{
                 transform: rotate(30deg);
                 color: #D4DDCA;
                 top: 20%;
             }
             .new2{
                  transform: rotate(-30deg);
                 color: #95A97B;
                 bottom: 20%;
                 left: 50%;
             }
             .van-button{
                 position: absolute;
                 bottom: 80px;
                 left: 50%;
                 transform: translateX(-50%);
             }
         }
     }
 }

</style>