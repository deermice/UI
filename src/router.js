import Vue from 'vue';
import Router from 'vue-router';

// Lazy load each top level route
const Home = () => import('./views/Home');
const Projects = () => import('./views/Projects');
const Blog = () => import('./views/Blog');
const Reviews = () => import('./views/Reviews');

Vue.use(Router);

export default new Router({
    mode: 'hash',
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
