export default [
    {
        path:'/order',
        name:'我的订单',
        component:()=>import("../../views/order.vue"),
        children:[
            {
                path:'orderAll',
                name:'全部订单',
                component:()=>import("../../components/order/orderAll.vue")
            },
            {
                path:'orderUnpay',
                name:'待支付',
                component:()=>import('../../components/order/orderUnpay.vue')
            },
            {
                path:'orderEnd',
                name:'待收货',
                component:()=>import('../../components/order/orderEnd.vue')
            },
            {
                path:'orderComplete',
                name:'待评价',
                component:()=>import('../../components/order/orderComplete.vue')
            }
        ]
    },
    {
        path:'/orderDetail',
        name:'订单详情',
        component:()=>import("../../components/my/login.vue")
    },
    {
        path:'/orderRequire',
        name:'注册',
        component:()=>import("../../components/order/requireOrder.vue")
    },
    {
        path:'/pay',
        name:'支付',
        component:()=>import("../../components/order/pay.vue")
    },
    {
        path:'/evaluation',
        name:'评价',
        component:()=>import("../../components/order/evaluation.vue")
    }
]