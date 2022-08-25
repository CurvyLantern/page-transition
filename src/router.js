import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import Work from '@/pages/Work.vue'
import Divider from '@/pages/Divider.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/divider',
    component: Divider
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHistory()
})

export default router