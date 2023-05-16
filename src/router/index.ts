import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../views/Authentication/loginForm.vue'
import { ROUTER_NAME_AUTHENTICATION, ROUTER_NAME_PAGE } from '@/constant/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTER_NAME_PAGE.HOME,
      component: HomeView
    },
    {
      path: '/login',
      name: ROUTER_NAME_AUTHENTICATION.LOGIN,
      component: LoginForm
    }
  ]
})
router.beforeEach((to, from, next) => {
  const allCookies = document.cookie.split(';')
  const name = ' access_token'

  let access_token = null
  for (let i = 0; i < allCookies.length; i++) {
    const nameCookie = allCookies[i].split('=')[0]
    if (nameCookie == name.toString()) {
      access_token = allCookies[i].split('=')[1]
    }
  }

  if (to.name !== 'login' && !access_token) {
    next({ name: 'login' })
  } else if (to.name === 'login' && access_token) {
    next()
  } else {
    next()
  }
})

export default router
