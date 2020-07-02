<template>
    <div class="page">
        <van-nav-bar title="地址管理" >
        <template #left>
            <van-icon name="arrow-left" color="#424242" size="20" @click="$router.go(-1)" />
        </template>
        </van-nav-bar>
        
        <div class="addrList">
            <van-row v-for="(item,index) in list" :key="index">
                <van-col span="4">
                    <van-checkbox v-model="item.isDefault"  @click="setDefault(index)" checked-color="#fc08b7"></van-checkbox>
                </van-col>
                <van-col span="17" @click="select(index)">
                    <p>
                        <span>{{item.name}}</span>
                        <span>{{item.tel}}</span>
                        <van-tag v-if="item.isDefault" round color="#d27bf2">默认</van-tag>
                    </p>
                    <p >
                        {{item.address}}
                    </p>
                </van-col>
                <van-col span="3">
                    <van-icon name="edit" size="20" @click="$router.push({path:'/edit',query:{id:index}})" />
                </van-col>
            </van-row>
        </div>
        <div class="fix">
            <van-button round color="#c805c1" @click="$router.push('/editAddress')" plain block>新增收货地址</van-button>
        </div>
       
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const { mapState } = createNamespacedHelpers('address')
    export default {
    data() {
        return {
                id:null
            };
        },
        methods: {
            select(index){
                if(this.$store.state.previouseRouter=="order"){
                    this.$store.commit('address/getAddr',index)
                    this.$router.go(-1)
                }
            },
            setDefault(index){
                this.$store.commit('address/setDefault',index)
            }
        },
        computed:mapState({
            list:'list'
        }),
        created(){
            if(this.$store.state.username == ''){
                this.$router.push('/login')
                return ;
            }
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
            
        },
        beforeRouteLeave (to, from, next) {
            if(to.path == '/orderRequire'){
                this.$store.state.previouseRouter=""
            }
            next()
        }
    };
</script>

<style lang="scss" scoped>
.page{
    padding-bottom:90px ;
}
.addrList{
    .van-row{
        margin-top: 10px;
    }
    .van-col--3{
        text-align: center;
        padding-top: 10px;
    }
   .van-col--4{
       text-align: center;
       transform: translateX(25%) translateY(100%);

   }
   .van-col--17{
       p{
           padding: 0;
           margin: 0;
           span{
               margin-right: 5px;
           }
           &:first-child{
               padding-top: 10px;
           }
           &:nth-child(2){
               margin-top: 5px;
               font-size: 12px;
           }
       }
   }
}
.fix{
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}
</style>