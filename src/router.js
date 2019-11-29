import Vue from 'vue';
import Router from 'vue-router';

// Static routes
import Home from './views/Home';
import Projects from './views/Projects';
import Blog from './views/Blog';
import Reviews from './views/Reviews';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: Reviews
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});
