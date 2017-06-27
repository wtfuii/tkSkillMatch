import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'

import App from './App'
import Home from './components/Home'
import MySkills from './components/MySkills'
import SearchSpecialist from './components/SearchSpecialist'
import Register from './components/Register'
import Login from './components/Login'
import Landing from './components/Landing'
import {authService} from './services/auth'

Vue.config.debug = true
Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
  routes: [
    { name: 'mySkills', path: '/myskills', component: MySkills },
    { name: 'home', path: '/home', component: Home },
    { name: 'searchSpecialist', path: '/searchspecialist', component: SearchSpecialist },
    { name: 'register', path: '/register', component: Register },
    { name: 'login', path: '/login', component: Login },
    { name: 'landing', path: '/landing', component: Landing },
    { name: 'root',
      path: '/',
      redirect: (to) => {
        if (authService().getUser()) {
          return 'home'
        } else {
          return 'landing'
        }
      }}
  ]
})

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
