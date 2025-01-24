import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistationView from '@/views/user/RegistationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, },
    { path: '/regisztracio', component: RegistationView, },
  ],
})

export default router
