import {createRouter,createWebHashHistory} from 'vue-router'

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component:()=>import("@/views/home/home.vue")
        },
        {
            path:"/favor",
            component:()=>import("@/views/favor/favor.vue")
        },
        {
            path:"/order",
            component:()=>import("@/views/order/order.vue")
        }
        ,
        {
            path:"/profile",
            component:()=>import("@/views/profile/profile.vue")
        }
    ]
})
export default router