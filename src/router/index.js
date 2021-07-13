import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/Login.vue'
import index from '../view/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
