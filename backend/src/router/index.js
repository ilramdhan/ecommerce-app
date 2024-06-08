import {createRouter, createWebHashHistory} from "vue-router";

// const routes= [];

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name:'register',
            component: Register
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }
    ]
})

export default router;
