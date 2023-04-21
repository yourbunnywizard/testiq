import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue')
    },
    {
      path: '/test-result',
      name: 'test-result',
      component: () => import('../views/Result.vue')
    },
    {
      path: '/response/:id',
      name: 'response',
      component: () => import('../views/Response.vue'),
      props: true
    }
  ]
})

export default router
