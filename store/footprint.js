export default {
    namespaced:true ,
    state:{
        list:[
        ]
    },
    mutations:{
        add(state,obj){
          let index =  state.list.findIndex(item=>item.id==obj.id)
          if(index ==(-1)){
            state.list.push(obj)
          }
        },
        del(state,obj){
            Object.assign(state.list,obj.obj)
            state.list.splice(-(obj.num))
        }
    }
}