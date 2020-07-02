export default {
    namespaced:true,
    state:{
        selectAddr:{},
        list: [
            
        ],
        
    },
    mutations:{
        addAddress(state,obj){
            if(obj.isDefault){
                state.list.forEach(item=>{
                    item.isDefault = false
                })
            }
            obj.id = state.list.length
            state.list.push(obj)
        },
        del(state,id){
            state.list.splice(id,1)
        },
        edit(state,{obj,id}){
            if(obj.isDefault){
                state.list.forEach(item=>{
                    item.isDefault = false
                })
            }
            Object.assign(state.list[id],obj)
        },
        getAddr(state,index){
            Object.assign(state.selectAddr,state.list[index])
        },
        setDefault(state,index){
            if(state.list[index].isDefault){
                state.list.forEach((item,i)=>{
                    if(i !== index) {
                        item.isDefault = false
                    }
                })
            }
        }

    },
    getters:{
    }
}