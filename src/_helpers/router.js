import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage';
import ProductPage from '../products/ProductPage';
import ProfilePage from '../profile/ProfilePage';
import ContactPage from '../contact/ContactPage';
import LoginPage from '../login/LoginPage';
import SignupPage from '../signup/SignupPage';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/products', component: ProductPage },
    { path: '/profile', component: ProfilePage },
    { path: '/contact', component: ContactPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignupPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/signup', '/', '/contact'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});