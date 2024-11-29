import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:path([A-z]*)',
            redirect: to => {
                return { path: `/2024/${to.params.path}` }
            }
        },
        {
            path: '/:year',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/:year/faq',
            name: 'faq',
            component: () => import('../views/FaqView.vue')
        },
        {
            path: '/:year/schedule',
            name: 'schedule',
            component: () => import('../views/ScheduleView.vue')
        },
        {
            path: '/:year/location',
            name: 'location',
            component: () => import('../views/LocationView.vue')
        },
        {
            path: '/:year/recap',
            name: 'recap',
            component: () => import('../views/RecapView.vue')
        }
    ]
})

export default router