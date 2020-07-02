<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in img" :key="index">
                        <!-- <img :src="item.img" alt=""> -->
                        <van-image
                            width="100%"
                            fit="contain"
                           :src="item.img"
                            />
                    </div>
            </div>
            <!-- Add Scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    data(){
        return {}
    },
    methods:{
        _initSwiper(){
             new Swiper('.swiper-container', {
            direction: 'horizontal',
            autoplay:true,
            scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false,
                    snapOnRelease: false,
                },
            });
        }
    },
    props:["img"],
    created(){
        this.$nextTick(()=>{
            this._initSwiper()
        })
    }
};
</script>

<style lang="scss" scoped>

.swiper-slide{
    &>img{
        width:100%;
    }
}
</style>