import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home/index.vue'),
      meta: { title: 'Home' },
    },
  ],
});

export default router;
