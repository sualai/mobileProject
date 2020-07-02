<template>
    <div>
        <order-component :orderrlist="$store.state.order.orderList"></order-component>
    </div>
</template>

<script>
import orderComponent from "./orderComponent.vue"
    export default {
       
        components:{
            orderComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>