import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { auth } from './firebase'
import { CometChat } from '@cometchat-pro/chat'
import { cometChat } from './app.config'

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    console.log('You are not authorized to access this area.')
    next('login')
  } else {
    next()
  }
})


const appID = cometChat.APP_ID
const region = cometChat.APP_REGION
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build()

CometChat.init(appID, appSetting)
  .then(() => {
    console.log('Initialization completed successfully')
    // You can now call login function.
    createApp(App).use(store).use(router).mount('#app')
  })
  .catch((error) => {
    console.log('Initialization failed with error:', error)
  })
