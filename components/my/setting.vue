<template>
    <div class="page">
        <van-nav-bar title ="我的设置" @click-left="$router.go(-1)">
            <template #left>
            <van-icon name="arrow-left" size="20" color="#5e5b5b" />
            </template>
        </van-nav-bar>
        <div class="content">
            
            <van-cell title="登录名"  :value="$store.state.username" />
             <van-cell title="绑定手机"  value="130*****888" />
             <van-cell title="绑定邮箱"  value="未绑定" />
             <van-cell title="关联账号"  value="暂无关联账号" />
              <van-cell title="实名认证"  value="未实名" />
        </div>
        <van-button block type="default" @click="back">退出</van-button>
    </div>
</template>

<script>
    export default {
        methods:{
            back(){
                this.$store.state.username = ""
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
.page{
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #f0f0f0;
}
    .content{
        margin:10px 0;
    }
</style>