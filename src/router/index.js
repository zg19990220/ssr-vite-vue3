import {
    createRouter as createVueRouter,
    createMemoryHistory,
    createWebHistory
} from 'vue-router'

export const createRouter = type =>
    createVueRouter({
        history: type === 'client' ? createWebHistory() : createMemoryHistory(),

        routes: [
            {
                path: '/',
                name: 'index',
                meta: {
                    title: '首页',
                },
                component: () => import('@/pages/index.vue')
            },
            {
                path: '/test',
                name: 'test',
                meta: {
                    title: '测试',
                },
                component: () => import('@/pages/test.vue')
            },
        ]
    })
