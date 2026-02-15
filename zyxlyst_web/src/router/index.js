import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/MainHome.vue'
import NotFound from '@/view/NotFound/NotFound.vue'

import Login from '@/view/LogIn/LogIn.vue'

const routes = [
  { path: '/', name: 'HomeRoot', component: Home },
  { path: '/home', name: 'Home', component: Home},
  { path: '/login' , name: 'Login', component: Login },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
