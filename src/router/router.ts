import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/HomePage/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (to.hash) {
        if (!from || !from.name) {
          setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: 'smooth',
            });
          }, 100);
        } else {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          });
        }
      } else if (savedPosition) {
        resolve(savedPosition);
      } else {
        resolve({ top: 0 });
      }
    });
  },
});

export default router;
