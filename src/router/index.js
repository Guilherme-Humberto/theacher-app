import { createRouter, createWebHistory } from 'vue-router'
import InitialView from '../views/Initial.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'initial',
      component: InitialView
    }
  ]
})

export default router
