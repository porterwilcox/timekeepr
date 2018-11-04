import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

const api = Axios.create({
  baseURL: "//localhost:5000/api/time/",
  timeout: 3000,
  withCredentials: true
})

const auth = Axios.create({
  baseURL: "//localhost:5000/account/",
  timeout: 3000,
  withCredentials: true
})


export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      router.push({ name: 'home', path: '/' })
    }
  },
  actions: {
    authenticate({ commit }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(e => {
          console.log('not authenticated')
        })
    },
    login({ commit }, payload) {
      auth.post('login', payload)
        .then(res => commit('setUser', res.data))
        .catch(e => {
          console.log(e)
        })
    },
    register({ commit }, payload) {
      auth.post('register', payload)
        .then(res => commit('setUser', res.data))
        .catch(e => {
          console.log(e)
        })
    },
    logout({ }) {
      auth.delete("logout")
        .then(res => {
          if (!res.data) return
          router.push({ name: 'login', path: '/login' })
        })
        .catch(e => {
          console.log(e)
        })
    },
  }
})
