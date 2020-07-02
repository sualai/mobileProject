export default [
    {
        path:'/address',
        name:'收货地址',
        component:()=>import('../../components/address/addrList.vue')
    },
    {
        path:'/editAddress',
        name:'新增地址',
        component:()=>import('../../components/address/editAddress.vue')
    },
    {
        path:'/edit',
        name:'修改地址',
        component:()=>import('../../components/address/edit.vue')
    }
]