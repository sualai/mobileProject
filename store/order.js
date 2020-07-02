export default {
    namespaced:true,
    state:{
        orderList:[
            // {
            //     goodList:[],//购物车数据
            //     address:{},订单地址
            //     orderCode:'',订单编号
            //     typeCode:1,  状态码，
            //     totalNum:1,   单笔数量
            //     totalPrice:2301.00 单笔总价
            // }
        ],
        typeMessage:["待支付","待收货","待评价","已完成"],
        ordering:{}
    },
    mutations:{
          addList(state){
          state.ordering.id = state.orderList.length + parseInt(Math.random()*10)
           let index =  state.orderList.findIndex(item=>{
               return item.orderCode == state.ordering.orderCode
            })
            if(index == (-1)){
                state.orderList.unshift(state.ordering)
            }else{
                Object.assign(state.orderList[index],state.ordering)
            }
            state.ordering = {}
        },
        del(state,obj){
            let index = state.orderList.findIndex(item=>{
                return item.id == obj.id
             })
             state.orderList.splice(index,1)
        },
        changeCode(state,obj){
            let index = state.orderList.findIndex(item=>{
                return item.id == obj.id
             })
             state.orderList[index].typeCode += 1 
        }
    }
}