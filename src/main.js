import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { auth } from './firebase'

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    console.log('You are not authorized to access this area.')
    next('login')
  } else {
    next()
  }
})

createApp(App).use(store).use(router).mount('#app')
