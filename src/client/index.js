import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'

import App from './App'
import Hello from './components/Hello'
import MySkills from './components/MySkills'
import SearchSpecialist from './components/SearchSpecialist'
import Register from './components/Register'
import {authService} from './services/auth'

Vue.config.debug = true
Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
  routes: [
    { name: 'mySkills', path: '/myskills', component: MySkills },
    { name: 'home', path: '/home', component: Hello },
    { name: 'searchSpecialist', path: '/searchspecialist', component: SearchSpecialist },
    { name: 'register', path: '/register', component: Register }
  ]
})

const instance = new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})

instance.auth = authService().getUser()
