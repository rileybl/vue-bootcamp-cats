import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/homepage.vue')
    
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/about.vue')

    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: () => import('../pages/contact-us.vue')

    },
    {
        path: '/cats',
        name: 'cats',
        component: () => import('../pages/cats.vue')
    }

]