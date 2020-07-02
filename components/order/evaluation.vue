<template>
    <div>
        <van-sticky>
            <van-nav-bar 
                @click-left="onClickLeft"
                >
                <template #left>
                    <span>
                        <van-icon name="down" color="#434343" size="20" />
                        我的评价
                    </span>
                </template>
            </van-nav-bar>
        </van-sticky>
        <div v-if="$store.state.evaluation.list.length">
            <div class="evaluation" v-for="(item,index) in $store.state.evaluation.list" :key="index"> 
                
                <van-row>
                    <van-col span="24">
                        <van-image 
                        round
                        width="40px"
                        :src="require('../../assets/images/isLogin.jpg')"
                         />
                         <span class="username">{{$store.state.username}}</span>
                    </van-col>
                    <van-col span="24">
                        <span class="time"> {{item.time}} </span>
                    </van-col>
                    <van-col span="8">
                        描述相符
                        <van-rate size="12" v-model="item.value" readonly />
                    </van-col>
                    <van-col  span="8">
                        物流服务
                        <van-rate size="12"  v-model="item.post" readonly />
                    </van-col>
                    <van-col  span="8">
                        服务态度
                        <van-rate size="12"  v-model="item.serve" readonly />
                    </van-col>
                </van-row>
               
                <p class="content">
                    {{item.content}}
                </p>
                <van-card
                @click="$router.push({path:'/detail',query:{id:item.id}})"
                :price="item.newPrice"
                :desc="item.style"
                :title="item.name"
                :thumb="item.img"
                />
            </div>
        </div>

        <div v-else>

            <van-empty 
                lass="custom-image"
                image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                description="还没有评价"
            
            >
                <van-button round  color="#8d0651" plain to="/order/orderComplete" class="bottom-button">
                    去评价
                </van-button>
            </van-empty>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/my')
            }
        },
        created(){
            if(this.$store.state.username == ""){
                this.$router.push('/login')
                return ;
            }
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
        }
    }
</script>

<style lang="scss" scoped>
.van-nav-bar{
    padding: 0 0 10px 0;
    color: #534343;
    .van-icon-down{
        vertical-align: middle;
        transform: rotate(90deg);
    }
}
.evaluation{
    padding: 10px;
    box-sizing: border-box;
    .time{
        display: inline-block;
        padding-top: 10px;
        font-size: 12px;
    }
    .van-col--8{
        font-size: 12px;
        padding: 10px 0;
    }
    .van-image{
        vertical-align: middle;
        margin-right: 10px;
    }
    .username{
        font-size: 12px;
    }
    .style{
        font-size: 12px;
        color: darkgray;
    }
    .content{
        padding: 0;
        margin: 0;
        font-size: 12px;
    }
}
</style>