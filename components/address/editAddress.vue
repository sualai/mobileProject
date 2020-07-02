<template>
    <div>
        <van-nav-bar title="新增收货地址" >
        <template #left>
            <van-icon name="arrow-left" color="#424242"  @click="$router.go(-1)" size="20" />
        </template>

        </van-nav-bar>
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            />
    </div>
</template>

<script>
    import areaList from "../../assets/js/erea"
  
    export default {
        data() {
            return {
                areaList,
                searchResult: [],
            };
        },
        methods: {
            onSave({name,tel,province,city,county,areaCode,postalCode,addressDetail,isDefault }) {
               let obj =  {
                    name,
                    tel,
                    address:province+city+county+addressDetail ,
                    isDefault,
                    province,
                    city,
                    county,
                    areaCode,
                    postalCode,
                    addressDetail
                }
                this.$store.commit('address/addAddress',obj)
                if(this.$store.state.previouseRouter=="order"){
                    // getAddr(state,index)
                    let index = this.$store.state.address.list.length
                    
                    this.$store.commit('address/getAddr',(index-1))
                    this.$router.push('/orderRequire')
                    return ;
                }
                this.$router.go(-1)
            },
        },
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
// .van-button--danger{
//     background-color: #fff ;
// }
.mask{
    width: 100%;
    background-color: #fff;
    height: 100px;
    position: fixed;
    bottom: 201px;
}
</style>