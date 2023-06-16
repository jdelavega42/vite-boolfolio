import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue'
import AppProject from './pages/AppProject.vue'
import AppAbout from './pages/AppAbout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component : AppHome
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component : AppProject
        },
        {
            path: '/about-us',
            name: 'about',
            component : AppAbout
        },

    ]
})
export { router}