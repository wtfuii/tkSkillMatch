import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'

import App from './App'
import Hello from './components/Hello'
import MySkills from './components/MySkills'

Vue.config.debug = true
Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
  routes: [
    { name: 'mySkills', path: '/myskills', component: MySkills },
    { name: 'Home', path: '/home', component: Hello }
  ]
})

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
