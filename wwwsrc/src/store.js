import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let production = !window.location.host.includes('localhost');
let baseUrl = production ? '//time-keepr.herokuapp.com/' : '//localhost:5000/';

let api = Axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 3000,
  withCredentials: true
})

let auth = Axios.create({
  baseURL: baseUrl + 'account/',
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    business: {},
    employees: [],
    timesObj: {},
    timesArr: [],
    atBusiness: false
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
      router.push({ name: 'home', path: '/' })
      if (business.managerId == state.user.id) {
        state.user.isManager = 1
      } else {
        state.user.isEmployee = 1
      }
    },
    setEmployees(state, employees) {
      state.employees = employees
    },
    setTimes(state, times) {
      if (state.user.isEmployee) {
        state.timesArr = times
        return
      }
      let obj = {}
      times.forEach(t => {
        obj[t.id] = t
      })  
      state.timesObj = obj
    },
    setDistance(state, distance) {
      if (distance <= .25) {
        state.atBusiness = true
      } else {
        state.atBusiness = false
      }
    },
    addTime(state, time) {
      if (state.user.isEmployee) {
        state.timesArr.push(time)
        return
      }
      Vue.set(state.timesObj, `${time.id}`, time)
    },
    updateTime(state, time) {
      if (state.user.isEmployee) {
        state.timesArr.pop()
        state.timesArr.push(time)
        return
      }
      state.timesObj[time.id] = time
    },
    setTimesPaid(state, payload) {
      payload.forEach(id => {
        let time = state.timesObj[id]
        Vue.delete(state.timesObj, `${time.id}`)
        time.isPaid = true
        Vue.set(state.timesObj, `${time.id}`, time)
      })
    }
  },
  actions: {
    //
    //USER DISPATCHES
    //
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          if (res.data.isManager) dispatch('managerGetBusiness', res.data.id)
          if (res.data.isEmployee) {
            dispatch('getTimes', res.data.id)
            navigator.geolocation.getCurrentPosition(l => {
              res.data.coords = {
                lat: l.coords.latitude,
                lng: l.coords.longitude
              }
            })
            dispatch('employeeGetBusiness', res.data)
          }
        })
        .catch(e => {
          console.error('not authenticated')
        })
    },
    login({ commit, dispatch }, payload) {
      auth.post('login', payload)
      .then(res => {
        commit('setUser', res.data)
        if (res.data.isManager) dispatch('managerGetBusiness', res.data.id)
        if (res.data.isEmployee) {
          dispatch('getTimes', res.data.id)
          navigator.geolocation.getCurrentPosition(l => {
            res.data.coords = {
              lat: l.coords.latitude,
              lng: l.coords.longitude
            }
          })
          dispatch('employeeGetBusiness', res.data)
        }
      })
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
    registerBusiness({ commit }, payload) {
      api.post('register', payload)
        .then(res => { commit('setBusiness', res.data) })
        .catch(e => console.error(e))
    },
    managerGetBusiness({ commit, dispatch }, managerId) {
      api.get(`manager/${managerId}`)
        .then(res => {
          commit('setBusiness', res.data)
          dispatch('getEmployees', res.data.id)
        })
        .catch(e => console.error(e))
    },
    employeeGetBusiness({ commit, dispatch }, employee) {
      api.get(`employee/${employee.id}`)
        .then(res => {
          commit('setBusiness', res.data)
          dispatch('haversine', {
            employee,
            business: res.data
          })
        })
        .catch(e => console.error(e))
    },
    addEmployee({ commit, dispatch }, payload) {
      api.post('enroll', payload)
        .then(res => { 
          commit('setBusiness', res.data)
          dispatch('haversine', {
            employee: {
              coords: payload.coords
            },
            business: res.data
          })
        })
        .catch(e => console.error(e))
    },
    getEmployees({ commit }, businessId) {
      api.get(`employees/${businessId}`)
        .then(res => commit('setEmployees', res.data))
        .catch(e => console.error(e))
    },
    getTimes({ commit }, userId) {
      api.get(`employee/times/${userId}`)
        .then(res => commit('setTimes', res.data))
        .catch(e => console.error(e))
    },
    //haversine from my team's capstone project - bullUtin
    haversine({commit}, payload) {
      console.log(payload)
      const earthRadius = 6371000
      let yourLat = payload.employee.coords.lat * (Math.PI / 180)
      let targetLat = payload.business.lat * (Math.PI / 180)
      let latDif = (payload.business.lat - payload.employee.coords.lat) * (Math.PI / 180)
      let lngDif = (payload.business.lng - payload.employee.coords.lng) * (Math.PI / 180)
      let a = (Math.sin(latDif / 2) * Math.sin(latDif / 2)) +
        (Math.cos(yourLat) * Math.cos(targetLat) *
          Math.sin(lngDif / 2) * Math.sin(lngDif / 2))
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      let distanceKM = (earthRadius * c) / 1000
      commit('setDistance', distanceKM * .6213)
    },
    //
    //EMPLOYEES DISPATCHES
    //
    clockIn({commit}, payload) {
      api.post("employee/clockin", payload)
        .then(res => commit('addTime', res.data))
        .catch(e => console.error(e))
    },
    clockOut({commit}, payload) {
      api.post("employee/clockout", payload)
        .then(res => commit('updateTime', payload))
        .catch(e => console.error(e))
    },
    //
    //MANAGER DISPATCHES W/ TIMES
    //
    setTimesPaid({commit}, payload) {
      let count = payload.length
      let successes = []
      payload.forEach(id => {
        api.put(`${id}`)
          .then(() => {
            successes.push(id)
            count--
            if (!count) commit('setTimesPaid', successes)
          })
          .catch(e => console.error(e))
      })
    }
  }
})
