export default {
    namespaced:true,
    state:{
        list:[]
    },
    mutations:{
        add(state,obj){
            obj.forEach(item=>{
                state.list.unshift(item)
            })
        }
    }
}