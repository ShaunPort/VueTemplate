import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        redirect: '/home',
        component: () => import('../views/Main'),
        children: [
            { path: 'home', component: Home }
        ]

    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
