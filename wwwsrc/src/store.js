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
    user: {},
    business: {}
  },
  mutations: {
    //
    //USER COMMITS
    //
    setUser(state, user) {
      state.user = user
      router.push({ name: 'home', path: '/' })
    },
    //
    //BUSINESS COMMITS
    //
    setBusiness(state, business) {
      state.business = business
      Vue.set(state.user, state.user.isManager, 1)
      router.push({name: 'home', path: '/'})
    }
  },
  actions: {
    //
    //USER DISPATCHES
    //
    authenticate({ commit }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(e => {
          console.error('not authenticated')
        })
    },
    login({ commit }, payload) {
      auth.post('login', payload)
        .then(res => commit('setUser', res.data))
        .catch(e => {
          console.error(e)
        })
    },
    register({ commit }, payload) {
      auth.post('register', payload)
        .then(res => commit('setUser', res.data))
        .catch(e => {
          console.error(e)
        })
    },
    logout({ }) {
      auth.delete("logout")
        .then(res => {
          if (!res.data) return
          router.push({ name: 'login', path: '/login' })
        })
        .catch(e => {
          console.error(e)
        })
    },
    //
    //BUSINESS DISPATCHES
    //
    registerBusiness({commit}, payload) {
      api.post('register', payload)
        .then(res => commit('setBusiness', res.data))
        .catch( e => console.error(e))
    }
  }
})
