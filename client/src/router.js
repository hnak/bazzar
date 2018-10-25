import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/MenuFrame.vue'),
      // meta: { requiresAuth: true },
      children: [
        { path: '/', component: () => import('./views/Top.vue') },
        { path: '/mypage', component: () => import('./views/MyPage.vue') },
        { path: '/loom', component: () => import('./views/LoomContractSample.vue') }
      ]
    },
    {
      path: '/',
      component: () => import('./views/LogoFrame.vue'),
      children: [
        { path: '/login', component: () => import('./views/Login.vue') },
        { path: '/signup', component: () => import('./views/SignUp.vue') },
        { path: '/oauth', component: () => import('./views/OAuthSample.vue') }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !store().getters.isLogin
  ) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
