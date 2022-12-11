import { createRouter, createWebHistory } from 'vue-router'
import InitialView from '../views/Home/main.vue'
import StudentInitialView from '../views/Student/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'initial',
      component: InitialView
    },
    {
      path: '/student',
      name: 'student-initial',
      component: StudentInitialView
    }
  ]
})

export default router
