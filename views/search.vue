<template>
    <div>
        <van-row class="clearfix"> 
            <van-col span="3">
                <van-icon @click="$router.go(-1)" name="arrow-left" size="20" color="#615d5d" />
            </van-col>
            <van-col span="18">
                <van-search
                    shape="round"
                    background="#f0f0f0"
                    placeholder="女士T恤"
                    v-model="msg"
                    @input="onSearch"
                    />
            </van-col>
            <van-col span="3">
                <span @click="$router.push('/goodsBrand')">搜索</span>
            </van-col>
        </van-row>
        <div class="search_box" v-show="flag">
            <ul>
                <li v-for="(item,index) in query" :key="index"  @click="$router.push({path:'/goodsBrand',query:{id:item.id}})">{{item.name}}</li>
            </ul>
        </div>
        <div class="search_query">
            <p class="title">猜你喜欢</p>
            <div class="hot">
                <van-button round plain size="small" @click="$router.push('/season')"  color="#ee39e8">框威低至79元</van-button>
                <van-button round plain size="small" @click="$router.push('/category')"   color="#ee39e8">儿童节亿元补贴</van-button>
                <van-button round plain size="small" @click="$router.push('/brand')"   color="#ee39e8">口碑爆款</van-button>
            </div>
            <div class="plain">
                <van-button round  size="small" @click="$router.push('/goodsBrand')" color="#f0f0f0">女士T恤</van-button>
                <van-button round  size="small" @click="$router.push({path:'/goodsBrand',query:{id:'beauty'}})" color="#f0f0f0">日霜</van-button>
                <van-button round  size="small" @click="$router.push('/goodsBrand')" color="#f0f0f0">连衣裙</van-button>
                <van-button round  size="small" @click="$router.push({path:'/goodsBrand',query:{id:'beauty'}})" color="#f0f0f0">防晒</van-button>
            </div>
            <div class="plain">
                <van-button round  size="small" @click="$router.push('/category')"   color="#f0f0f0">女款户外衬衫</van-button>
                <van-button round  size="small" @click="$router.push('/category')"  color="#f0f0f0">耐克Nike</van-button>
                <van-button round  size="small" @click="$router.push('/category')" color="#f0f0f0">女士休闲裤</van-button>
            </div>
            <div class="plain">
                <van-button round  size="small" @click="$router.push('/category')" color="#f0f0f0">户外套装</van-button>
                <van-button round  size="small" @click="$router.push('/category')" color="#f0f0f0">女休闲鞋</van-button>
                <van-button round  size="small" @click="$router.push('/category')" color="#f0f0f0">女单鞋</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                flag:false,
                msg:'',
                query:[
                    {name:'女士T恤',id:'cloth'},
                    {name:'护肤',id:'suit'},
                    {name:'连衣裙 女',id:'cloth'},
                    {name:'防晒',id:'beauty'},
                    {name:'女款户外衬衫',id:'cloth'}
                ]
            }
        },
        methods:{
            onSearch(){
                this.query =  this.query.filter(item => item.name.includes(this.msg))
                if(this.query.length == 0){
                    return ;
                }
                this.flag = true
            }
        },
        created(){
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
        }
    }
</script>

<style lang="scss" scoped>
    .van-row{
        height: 54px;
        line-height: 54px;
        background-color: #f0f0f0;
        text-align: center;
        font-size: 12px;
        .van-icon{
            line-height: 54px;
            font-weight: 100;
        }
        .search_text{
            color:#303031;
            font-size: 14px;
        }
    }
    .search_query{
        padding-left: 15px;
        .title{
            font-weight: 550;
            margin: 10px 0;
            font-size: 16px;
        }
        &>div{
            margin-top: 10px;
        }
        .van-button{
            margin-right:10px ;
        }
        .plain{
            .van-button{
                color: #333 !important;
            }
        }
    }
    .search_box{
        position:absolute;
        width: 100%;
        top: 54px;
        left: 0;
        background-color: #fff;
        z-index: 999;
        min-height: 200px;
        ul{
            padding-left: 20px;
            li{
                text-align: left;
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #ccc;
                font-size: 12px;
            }
        }
    }
</style>