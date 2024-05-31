import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage/HomePage.vue'),
  },
  {
    path: '/:id',
    name: 'Project',
    component: () => import('../pages/ProjectPage/ProjectPage.vue'),
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
