
export default {
    namespaced:true,
    state:{
        cartList:[]
    },
    mutations:{
        add(state,obj){
            let index = state.cartList.findIndex(item=>item.id == obj.id)
            if(index == (-1)){
                state.cartList.push(obj)
            }else{
                state.cartList[index].num += 1
            }
        },
        del(state,i){
            state.cartList.splice(i,1)
        },
        edit(state,obj){
            Object.assign(state.cartList,obj)
        },
        removeList(state,obj){
            

            obj.forEach(item=>{
                item.del = 1
            })
            Object.assign(state.cartList,obj)
            let temp = 0
            state.cartList.forEach(item=>{
                if(item.del){
                    temp +=1
                }
            })
            state.cartList.sort((item1,item2)=>{
                if(item1.del && !item2.del){
                    return 1
                }else if(!item1.del && !item2.del || item1.del && item2.del){
                    return 0
                }else {
                    return -1
                }
            })
            state.cartList.splice(-(temp))
        }
    },
    actions:{},
    getters:{
       
    },
    modules:{}
}