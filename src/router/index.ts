import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/OverviewView.vue'
import Storage from '../views/StorageView.vue'

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
    }
  ]
})

export default router
