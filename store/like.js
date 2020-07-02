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
        delSingle(state,id){
            let index = state.list.findIndex(item => item.id == id)
            if(index !== (-1)){
                state.list.splice(index,1)
            }
        },
        del(state,obj){
            Object.assign(state.list,obj.obj)
            state.list.splice(-(obj.num))
        }
    }
}