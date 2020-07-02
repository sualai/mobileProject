<template>
  <div class="page">
    <van-nav-bar title="桃依饰客服" @click-left="$router.go(-1)">
      <template #left>
        <van-icon name="arrow-left" size="20" color="#5e5b5b" />
      </template>
    </van-nav-bar>

    <div class="msg-bubble__box ct-txt-msg msg-bubble__box--left">
      <div class="msg" ref="msgbox">
        <div  class="content-left" v-show="tell" >

            <div class="header_box">
                <img src="../../assets/images/kf.jpg" alt="">
            </div>
            <div class="worker">
                工号【113684_007】为你服务...您好，欢迎进入人工服务~幸福的一天，欢迎来到商品咨询 
            </div>
        </div>
         <div class="contentright" v-for="(item , index) in msg" :key="index">
                <div class="msg">
                    {{item}}
                </div>
                <div class="header_box">
                    <img src="../../assets/images/isLogin.jpg" alt="">
                </div>
            </div> 
      </div>
    </div>

    <div class="fix">
      <van-row>
        <van-col span="3">
          <van-icon name="smile-o" size="20px" />
        </van-col>
        <van-col span="16">
          <van-field v-model="message" rows="1" autosize type="textarea" placeholder="我想说" />
        </van-col>
        <van-col span="5">
          <van-button size="small" round color="#d653b1" @click="send">发送</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      tell:false,
      msg:[],
      time:null
    };
  },
  methods:{
      send(){
          if(this.message==""){
              return ;
          }
        this.msg.push(this.message)
        this.message = ""
      }
  },
  created(){
    if(this.$store.state.username == ''){
        this.$router.push('/login')
        return ;
      }
      this.$store.state.showTop = false
      this.$store.state.showBottom = false
      this.time = setTimeout(()=>{
          this.tell = true
      },500)
  },
  beforeDestroy(){
      this.time = null
  }
};
</script>

<style lang="scss" scoped>
.page{
    position:absolute;
    min-height: 100%;
    width: 100%;
    background-color: #f0f0f0;
    .contentright,
    .content-left{
        margin-top: 10px;
        
        .header_box{
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            margin-left: 20px;
            img{
                width: 100%;
            }
            
        }
        .worker{
            display: inline-block;
            font-size: 12px;
            display: inline-block;
            background-color: #fff;
            margin-left: 10px;
            padding: 10px;
            border-radius: 15px;
            max-width: 150px;
            vertical-align: middle;
        }
    }
   
    .contentright{
        padding-right: 20px;
        text-align: right;
        .header_box{
            vertical-align: middle;
        }
        .msg{
            display: inline-block;
            padding: 10px;
            background-color: #fff;
            border-radius: 15px;
            max-width: 150px;
            font-size: 12px;
        }
    }
}

.fix {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  padding-top:20px ;
  background-color: #fff;
  text-align: center;
  .van-field {
    width: 100%;
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 25px;
  }
  .van-col--3 {
    padding-top: 10px;
  }
}
</style>