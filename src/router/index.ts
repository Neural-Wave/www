import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('../views/FaqView.vue')
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: () => import('../views/ScheduleView.vue')
        }
    ]
})

export default router