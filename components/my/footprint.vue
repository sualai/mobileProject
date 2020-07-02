<template>
    <div>
        <van-sticky>
            <van-nav-bar 
            @click-left="$router.go(-1)"
            @click-right="onClickRight"
            >
                <template #title>我的足迹</template>
                <template #right >{{optTitle}}</template>
                <template #left>
                <van-icon name="arrow-left" size="20" color="#5e5b5b" />
                </template>
            </van-nav-bar>
        </van-sticky>
        <div class="list_box" ref="list" v-if="$store.state.footprint.list.length">
             <van-checkbox v-model="select" v-show="isShow" icon-size="20px">全选</van-checkbox>
            <div class="tar" v-for="(item,index) in list" :key="index" >
                <van-checkbox v-show="isShow"  v-model="item.isSelect" icon-size="20px"></van-checkbox>
                <van-card @click="$router.push({path:'/detail',query:{id:item.id}})"
                    :price="item.price"
                    :title="item.name"
                    >
                    <template #thumb>
                        <van-image
                        height="100%"
                            fit="contain"
                            :src="item.img"
                            />
                    </template>
                </van-card>
                <div class="cart">
                        <i class="icon-gouwuche iconfont"></i>
                    </div>
            </div>
        </div>

        <div class="empty" v-else>
                <van-icon name="fail" size="100" color="#ccc" />
                <p>你还没留下任何痕迹，
                    <router-link to="/category">去走走吧</router-link>    
                 </p>
        </div>
        
        <div class="fix" v-show="isShow">
            <van-button type="danger" @click="del">删除</van-button>
        </div>
    </div>
</template>

<script>
    import {Toast} from "vant"
    export default {
        data(){
            return {
                isShow:false,
                optTitle:'管理',
                list:[
                ]
            }
        },
        methods:{
            onClickRight(){
                if(this.list.length == 0){
                    Toast.fail('暂无足迹管理');
                    return ;
                }
                this.isShow = !this.isShow
                let tarList = this.$refs.list.getElementsByClassName('tar')
                if(this.isShow){
                    this.optTitle = '完成'
                    tarList.forEach(item=>{
                        item.classList.add('list')
                    })
                }else{
                    this.optTitle = '管理'
                    tarList.forEach(item=>{
                        item.classList.remove('list')
                    })
                }
            },
            del(){
                let temp = 0
                this.list.forEach(item=>{
                    if(item.isSelect){
                        temp +=1
                    }
                })
                this.list.sort((item1,item2)=>{
                    if(item1.isSelect && !item2.isSelect){
                        return 1
                    }else if(!item1.isSelect && !item2.isSelect || item1.isSelect && item2.isSelect){
                        return 0
                    }else {
                        return -1
                    }
                })
                this.$store.commit('footprint/del',{obj:this.list,num:temp})
                this.list.splice(-(temp))
                this.isShow = false
                this.optTitle = '管理'
            }
        },
         computed:{
            select:{
                get(){
                    return this.list.every(item=>item.isSelect)
                },
                set(value){
                    this.list.forEach(item=>{
                        item.isSelect = value
                    })
                }
            }
        },
        created(){
             if(this.$store.state.username == ""){
                this.$router.push('/login')
                return ;
            }
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
            Object.assign(this.list,this.$store.state.footprint.list)
        },
       beforeDestroy(){
           this.$store.state.footprint.list = this.list
       }
    }
</script>

<style lang="scss" scoped>
.van-card__title{
    padding:0 50px 0 10px;
    box-sizing: border-box;
}
.tar{
    position: relative;
    border-bottom:1px solid #ccc ;
}
.empty{
    height: 90px;
    padding-top: 30px;
    width: 100%;
    text-align: center;
    p{
        font-size: 12px;
        color: darkgrey;
    }
}
.list_box>.van-checkbox{
    margin-left: 5px;
}

.cart{
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius:15px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    text-align: center;
    .iconfont{
        font-size: 15px;
    }
}
.van-card{
    background-color: #fff;   
   }

.list{
    position: relative;
    padding-left: 20px;
    box-sizing: border-box;
   .van-checkbox{
       position: absolute;
       top: 50%;
       left: 5px;
       z-index: 999;
       transform: translateY(-50%);
   }

}
.fix{
    position: fixed;
    bottom: 0;
    right: 0;
}
</style>