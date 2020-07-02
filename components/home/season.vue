<template>
    <div class="season_page">
        <!-- 头部大图 -->
        <div class="season_top">
            <img src="../../assets/images/qi_bg.webp" alt="">
            <div class="top_list">
                <van-row>
                    <van-col span="5">
                        <img src="../../assets/images/qi_bg1.webp" alt="">
                        <span>防晒好物</span>
                    </van-col>
                    <van-col span="5">
                        <img src="../../assets/images/qi_bg2.webp" alt="">
                        <span>精美配饰</span>
                    </van-col>
                    <van-col span="5">
                        <img src="../../assets/images/qi_bg3.webp" alt="">
                        <span>品质手表</span>
                    </van-col>
                </van-row>
            </div>
             
        </div>
        <div class="tit_box">
            <img src="../../assets/images/qi_title.webp" alt="">
        </div>

        <!-- 捡漏 -->
        <div class="season_jianlou">
           
            <div class="jianlou_box">
                <h2>
                    <span>今日捡漏王</span>
                    <span>每日更新</span>
                </h2>
                <van-row>
                    <van-col span="6">
                        <img src="../../assets/images/qi_jl1.webp" alt="">
                        <p class="price">
                            <span>￥39</span>
                            <span>￥139</span>
                        </p>
                    </van-col>
                    <van-col span="6">
                        <img src="../../assets/images/qi_jl2.webp" alt="">
                        <p class="price">
                            <span>￥94</span>
                            <span>￥418</span>
                        </p>
                    </van-col>
                    <van-col span="6">
                        <img src="../../assets/images/qi_jl3.webp" alt="">
                        <p class="price">
                            <span>￥49</span>
                            <span>￥359</span>
                        </p>
                    </van-col>
                    <van-col span="6">
                        <img src="../../assets/images/qi_jl4.webp" alt="">
                        <p class="price">
                            <span>￥39</span>
                            <span>￥139</span>
                        </p>
                    </van-col>
                </van-row>
            </div>
        </div>
        <!-- 捡漏end -->
        <!-- 好品推荐 -->
        <div class="season_recommend">
           
            <div class="recommend_box">
                <h2>
                    <span>热卖品牌</span>
                    <span>好货推荐</span>
                </h2>
                <van-row>
                    <van-col span="8">
                        <div class="text">
                            <p class="color">超级精选</p>
                            <p>爆款1折
                                <van-icon name="arrow" />
                            </p>
                        </div>
                        <img src="../../assets/images/qi_hot1.webp" alt="">
                    </van-col>
                    <van-col span="8">
                        <div class="text">
                            <p>品牌清仓</p>
                            <p>大牌3折
                                <van-icon name="arrow" />
                            </p>
                        </div>
                        <img src="../../assets/images/qi_hot2.webp" alt="">
                    </van-col>
                    <van-col span="8">
                        <div class="text">
                            <p class="color">断码特惠</p>
                            <p>低至19元
                                <van-icon name="arrow" />
                            </p>
                        </div>
                        <img src="../../assets/images/qi_hot3.webp" alt="">
                    </van-col>
                </van-row>
            </div>
        </div>
        <!-- 好品推荐end -->
        <!-- 精品 -->
        <div class="jp">
            <img src="../../assets/images/qi_jp_title.webp" alt="">
             <!-- 筛选 -->
            <van-sticky >
                <van-row>
                    <van-col span="6">
                    价格
                    <span>
                        <van-icon name="arrow-up" />
                        <van-icon name="arrow-down" />
                    </span>
                    </van-col>
                    <van-col span="6">
                    折扣
                    <span>
                        <van-icon name="arrow-up" />
                        <van-icon name="arrow-down" />
                    </span>
                    </van-col>
                    <van-col span="6">销量</van-col>
                    <van-col span="6">
                    筛选
                    <van-icon name="filter-o" />
                    </van-col>
                </van-row>
            </van-sticky>
            <!-- 筛选end -->
        </div>
        <jt-list :jxlist="jxlist"></jt-list>
        <!-- 精品end -->

        <!-- 首页导航 -->
        <div class="fix" @click="$router.push('/home')">
            <van-icon name="wap-home-o" size="38" />
        </div>
        <!-- 首页导航end -->
    </div>
</template>

<script>
import jtList from "../public/jtList";
    export default {
        data(){
            return {
                jxlist:[
                    {
                        id:'seson1',
                        img:require('../../assets/images/jian_list1.webp'),
                        name:'贴身无痕中性男女款弹力加厚保暖护膝（1对装）',
                        newPrice:11,
                        brand:'Lee Cooper',
                        oldPrice:55

                    },
                    {
                        id:'seson2',
                        img:require('../../assets/images/jian_list2.webp'),
                        name:' 2020卫衣女春秋季宽松女卫衣胸前背面字母女士卫衣',
                        newPrice:39,
                         brand:'HLA海澜之家',
                        oldPrice:119
                    },
                    {
                        id:'seson3',
                        img:require('../../assets/images/jian_list3.webp'),
                        name:'2020新款舒适男士连帽卫衣休闲简约男士卫衣卫衣男男卫衣',
                        newPrice:39,
                         brand:'巴贝',
                        oldPrice:98
                    },
                    {
                        id:'seson4',
                        img:require('../../assets/images/jian_list6.webp'),
                        name:'帆布袋单肩包韩版手提带拉链购物袋环保袋学生买菜包',
                        newPrice:19.9,
                        brand:'德玛纳',
                        oldPrice:39
                    },
                    {
                        id:'seson5',
                        img:require('../../assets/images/jian_list7.webp'),
                        name:'伯希和 环保耐磨 舒适柔软 户外中性款骑行迷彩魔术头巾',
                        newPrice:14,
                        brand:'FAIRY-FOX',
                        oldPrice:25
                    },
                    {
                        id:'seson6',
                        img:require('../../assets/images/jian_list8.webp'),
                        name:'4条装 3D立体舒适棉柔透气 男士内裤男平角短裤男中腰四角裤',
                        newPrice:29.9,
                         brand:'柏朗亚高',
                        oldPrice:49
                    },
                    {
                        id:'seson7',
                        img:require('../../assets/images/jian_list9.webp'),
                        name:'【潮隐形】10双装 日系简约纯色硅胶防滑袜子女士隐形短袜',
                        newPrice:35,
                        oldPrice:59,
                        brand:'依伴'
                    },
                    {
                        id:'seson8',
                        img:require('../../assets/images/jian_list5.webp'),
                        name:'【爆款推荐】巴布豆2020年夏新品舒适面料休闲男童长裤防蚊裤',
                        newPrice:35,
                        brand:'鸿星尔克',
                        oldPrice:59

                    },
                    {
                        id:'seson9',
                        img:require('../../assets/images/jian_list4.webp'),
                        name:' 夏季男polo纯色翻领短袖T恤休闲运动户外Polo衫',
                        newPrice:53,
                        brand:'依伴',
                        oldPrice:139
                    },
                    {
                        id:'seson10',
                        img:require('../../assets/images/jian_list10.webp'),
                        name:'【轻薄无痕 睡眠运动】舒适背心抹胸女士内衣无钢圈聚拢文胸',
                        newPrice:38,
                        brand:'Lee Cooper',
                        oldPrice:118
                    },
                    {
                        id:'seson11',
                        img:require('../../assets/images/jian_list11.webp'),
                        name:'衣品天成童装新款夏装纯棉圆领荷叶边袖摆木耳花边短袖女童连衣裙',
                        newPrice:49,
                        brand:'LEE Cooper',
                        oldPrice:108
                    },
                    {
                        id:'seson12',
                        img:require('../../assets/images/jian_list12.webp'),
                        name:'2020卫衣女春秋季连帽女卫衣韩版宽松字母刺绣长袖女士卫衣',
                        newPrice:39,
                        brand:'鸿星尔克',
                        oldPrice:199
                    }
                ]
            }
        },
        methods:{},
        components:{
            jtList
        },
        created() {
            this.$store.state.showTop = false;
            this.$store.state.showBottom = false;
        }
    }
</script>

<style lang="scss" scoped>
.season_page{
    background: #f0f0f0;
}
    .season_top{
        position: relative;
        img{
            width: 100%;
        }
        .top_list{
            position: absolute;
            bottom: 10px;
            text-align: center;
            .van-col{
                background-color: #fff;
                transform: scale(.89);
                border-radius: 10px;
                padding-bottom: 5px;
                overflow: hidden;
                span{
                    font-size: 18px;
                    color: #353335;
                }
            }
        }
    }
    .tit_box{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .season_jianlou{
        img{
            width: 100%;
        }
        padding: 10px;
        .jianlou_box{
            border-radius: 20px;
            margin-top: 10px;
            width: 100%;
            padding-top: 10px;
            background-color: #fff;
            h2{
                font-weight: normal;
                text-align: center;
                span{
                    margin-left: 5px;
                }
                span:nth-child(2){
                    color: #981313;
                }
            }
            .price{
                text-align: center;
                span:first-child{
                    font-size: 18px;
                    font-weight: bold;
                    color: #353335;
                    margin-right: 5px;
                }
                span:nth-child(2){
                    font-size: 14px;
                    color: #ccc;
                    text-decoration: line-through;
                }

            }
            .van-col{
                transform: scale(.8);
                border: 1px solid #f0f0f0;
                border-radius: 10px;
                overflow: hidden;
                img{
                    width: 100%;
                    
                }
            }
        }
       
    }
    .season_recommend{
         img{
            width: 100%;
        }
        padding: 10px;
        
        .recommend_box{
            border-radius: 20px;
            margin-top: 10px;
            width: 100%;
            padding-top: 10px;
            background-color: #fff;
            padding-bottom: 10px;
            h2{
                font-weight: normal;
                text-align: center;
            }
            .van-row{
                padding: 0 10px;
                
                .van-col{
                    position: relative;
                    .text{
                        position: absolute;
                        left: 10px;
                        
                        p:first-child{
                            font-size: 22px;
                            margin-bottom: 0;
                            &.color{
                            color: #981313;
                        }
                        }
                        p:nth-child(2){
                            font-size: 16px;
                        }
                    }
                }
            }
        }

    }
    .jp{
        img{
            width: 100%;
        }
        .van-sticky {
            .van-row {
                padding-top: 10px;
                padding-bottom: 10px;
                text-align: center;
                background-color: #fff;
                .van-col {
                font-size: 14px;
                color: #5e5b5b;
                span {
                    display: inline-block;
                    vertical-align: top;
                    font-size: 12px;
                    .van-icon {
                    display: block;
                    margin-bottom: -5px;
                    }
                }
                }
            }
        }
    }
     .fix{
        position: fixed;
        bottom: 30px;
        right: 10px;
        width: 50px;
        height: 50px;
        text-align: center;
        border-radius: 50%;
        background-color: rgba(1, 0, 0, 0.39);
        color: #fff;
        font-weight: bold;
        .van-icon{
            line-height: 50px;
        }
    }
</style>