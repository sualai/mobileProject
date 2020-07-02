<template>
    <div>
        <van-nav-bar title="修改地址" >
        <template #left>
            <van-icon name="arrow-left" color="#424242"  @click="$router.go(-1)" size="20" />
        </template>
        </van-nav-bar>
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-set-default
            show-delete
            show-search-result
            :search-result="searchResult"
            :address-info="addressInfo"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            />
    </div>
</template>

<script>
    import areaList from "../../assets/js/erea"
  
    export default {
        data() {
            return {
                id:null,
                addressInfo:{},
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
                this.$store.commit('address/edit',{obj,id:this.id})
                this.$router.go(-1)
            },
            onDelete(){
                this.$store.commit('address/del',this.id)
                this.$router.go(-1)
            }
        },
        created(){
            if(this.$store.state.username == ''){
                this.$router.push('/login')
                return ;
            }
            this.$store.state.showTop = false
            this.$store.state.showBottom = false
            this.id = this.$route.query.id
            this.addressInfo = this.$store.state.address.list[this.id]
        }
    };
</script>

<style lang="scss" scoped>
.van-button--danger{
    background-color: #fff ;
}
</style>