import Vue from 'vue';
import Router from 'vue-router';
import LogoFrame from './views/LogoFrame.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import MenuFrame from './views/MenuFrame.vue';
import MyPage from './views/MyPage.vue';
import Top from './views/Top.vue';
import OAuthSample from './views/OAuthSample.vue';

import store from '@/store/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: MenuFrame,
      meta: { requiresAuth: true },
      children: [
        { path: '/', component: Top },
        { path: '/mypage', component: MyPage }
      ]
    },
    {
      path: '/',
      component: LogoFrame,
      children: [
        { path: '/login', component: Login },
        { path: '/signup', component: SignUp },
        { path: '/oauth', component: OAuthSample }
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
