<template>
    <div>
        <order-component :orderrlist=" orderlist"></order-component>
    </div>
</template>

<script>
import orderComponent from "./orderComponent.vue"
    export default {
        data(){
            return {
                orderlist:[]
            }
        },
        components:{
            orderComponent
        },
        created(){
           let list =  this.$store.state.order.orderList.filter(item=>{
                return item.typeCode == 2
            })
            Object.assign(this.orderlist,list)
        }
    }
</script>

<style lang="scss" scoped>

</style>