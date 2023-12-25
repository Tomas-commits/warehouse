import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'
import Storage from '../views/Storage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/storage',
      name: 'storage',
      component: Storage
    },

  ]
})

export default router
