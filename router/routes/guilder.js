export default [
    {
        path:'/adverpage',
        name:'广告页',
        component:()=>import('../../components/guilder/adverpage.vue'),
        beforeEnter (to, from, next) {
            if(localStorage.guilderpage){ 
                next()
            }else {
                localStorage.guilderpage = true 
                next('/guilderpage')
            }
        }
    },
    {
        path:'/guilderpage',
        name:'引导页',
        component:()=>import('../../components/guilder/guilderpage.vue')
    }
]