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
    { name: 'hello', path: '/hello', component: Hello },
    { name: 'mySkills', path: '/myskills', component: MySkills }
  ]
})

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
