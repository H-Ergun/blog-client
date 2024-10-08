import  { lazy } from 'react';

// Lazy-loaded bileşenler
const Home = lazy(() => import('./pages/home'));
const Blog = lazy(() => import('./pages/blog'));
const NotFound = lazy(() => import('./pages/404'));

// Route yapılandırma dizisi
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'blog',
    path: '/blog',
    component: Blog,
  },
  {
    name: 'NotFound',
    path: '*', // Yönlendirme bulunmadığında
    component: NotFound,
  },
];

export default routes;