import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/homepage.vue'
import About from '../pages/about.vue'
import Contact from '../pages/contact-us.vue'
import Cats from '../pages/cats.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    
    },
    {
        path: '/about',
        name: 'About',
        component: About

    },
    {
        path: '/contact-us',
        name: 'Contact Us',
        component: Contact

    },
    {
        path: '/cats',
        name: 'Cats',
        component: Cats
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes,
})

export default router