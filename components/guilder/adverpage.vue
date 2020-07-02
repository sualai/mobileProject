<template>
    <div class="page">
        <div class="adv">
            <van-image
                height="100%"
                
                :src="require('../../assets/images/timg.gif')"
                />
        </div>
        <div class="steps">
            <van-circle
                v-model="currentRate"
                :rate="rate"
                layer-color="#ccc"
                color="rgba(0,0,0,.5)"
                fill="#f0f0f0"
                :text="sec"
                size="30px"
            />
        </div>
        <button class="btn" @click="$router.push('/home')">跳过</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                currentRate:0,
                rate:0,
                sec:"3",
                time1:null,
                time2 :null
            }
        },
        created(){
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
            this.time1 = setInterval(()=>{
                
                this.sec = (this.sec-1)+''
                if(this.sec <= 0){
                    this.$router.push('/home')
                }     
            },1000)
            this.time2 = setInterval(()=>{
                
                this.rate+=3.3
                
            },100)
        },
        beforeDestroy(){
            clearInterval(this.time1)
            clearInterval(this.time2)
        }
    }
</script>

<style lang="scss" scoped>
    .page{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .adv{
            height: 100%;
            width: 100%;
        }
        img{
            width: 100%;
        }
        button{
            position: absolute;
            top: 5px;
            right: 10px;
            border: none;
            outline: none;
            background-color: rgba(0,0,0,.5);
            font-size: 12px;
            color: #f0f0f0;
            border-radius: 10px;
        }
        .steps{
            position: absolute;
            top: 5px;
            right: 60px;
        }
    }
</style>