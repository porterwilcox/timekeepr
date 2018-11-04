import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import EmployeeRegister from './views/EmployeeRegister.vue'
import BusinessRegister from './views/BusinessRegister.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/employee-register',
      name: 'employeeRegister',
      component: EmployeeRegister
    },
    {
      path: '/business-register',
      name: 'businessRegister',
      component: BusinessRegister
    }
  ]
})
