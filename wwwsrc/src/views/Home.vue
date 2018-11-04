<template>
  <div class="home container-fluid h100">
    <div class="row bg-secondary h25">
      <div class="col-10 d-flex justify-content-center align-items-center">
        <h1>TimeKeepr</h1>
      </div>
      <div class="col-2 d-flex justify-content-end align-items-center">
        <button @click="logout()" class="btn btn-outline-dark">logout</button>
      </div>
      <div v-if="!user.isEmployee && !user.isManager" class="col col-md-10 offset-md-1 text-center py-2">
        <h5>Welcome to TimeKeepr! Join a business as an employee or register a new business as a manager to get started.</h5>
      </div>
    </div>
    <div v-if="!user.isEmployee && !user.isManager" class="row h65 mt5 choices">
      <div @click="empReg()" class="col-10 col-md-5 offset-md-0 bg-light clickable d-flex justify-content-center choice1 align-items-center">
        <h3>Join a business as an employee</h3>
      </div>
      <div @click="busnReg()" class="col-10 col-md-5 offset-md-0  bg-dark text-white clickable d-flex justify-content-center choice2 align-items-center">
        <h3>Register a new business as the manager</h3>
      </div>
    </div>
    <div v-else-if="!user.isEmployee" class="row h65 mt5">
      <div class="col-10 offset-1 col-md-8 offset-md-2">
        <h2>Hello, {{business.name}}.</h2>
        <h4 v-if="employees.length">Share your pin - <span class="clickable" v-if="show" @click="show = !show"><b>{{business.pin}}</b></span> <span class="clickable" v-if="!show" @click="show = !show"><b>Show Pin</b></span> - with other employees so they can join {{business.name}}, too.</h4>
      </div>
      <div v-if="!employees.length" class="col-10 offset-1 col-md-8 offset-md-2">
        <h4>You don't have any employee's on TimeKeepr registered under your company.</h4>
        <h4>Share your pin - <span class="clickable" v-if="show" @click="show = !show"><b>{{business.pin}}</b></span> <span class="clickable" v-if="!show" @click="show = !show"><b>Show Pin</b></span> - with your employees so they can join {{business.name}}.</h4>
      </div>
      <div v-else class="col-10 offset-1 col-md-8 offset-md-2">
        <h2>Your employees: </h2>
        <div class="row justify-content-around">
          <div @click="openProfile(e)" v-for="e in employees" :key="e.id" class="col-12 col-md-5 bg-light my-1 d-flex justify-content-center clickable">
            <h1>{{e.firstName}} {{e.lastName}}</h1>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!user.isManager" class="row h65 mt5">
      <div class="col-10 offset-1 col-md-8 offset-md-2">
        <h2>Hello, {{user.firstName}}.</h2>
        <h4 v-if="!times.length">Clock-in when you arrive at {{business.name}}.</h4>
        <h4 v-else-if="!times[times.length-1].clockOut">You clocked-in at {{times[times.length-1].clockIn}}</h4>
        <h4 v-else>Clock-in when you arrive at {{business.name}}. <span @click="openProfile(user)" class="clickable"><b>Show your times.</b></span></h4>
      </div>
      <h1 v-if="user.coords">Lat: {{user.coords.lat}}</h1>
      <h1 v-if="user.coords">lng: {{user.coords.lng}}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  mounted() {
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "login" });
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    business() {
      return this.$store.state.business
    },
    employees() {
      return this.$store.state.employees
    },
    times() {
      return this.$store.state.times
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    empReg() {
      this.$router.push({path: "/employee-register"})
    },
    busnReg() {
      this.$router.push({path: "/business-register"})
    },
    openProfile(e) {
      this.$router.push({name: 'employee', params: {eId: e.id, e}})
    }
  }
};
</script>
<style>
.h25 {
    height: 25vh;
}
.h65 {
  height: 65vh;
}
.mt5 {
  margin-top: 5vh;
}
.choices {
  justify-content: space-evenly;
}
.clickable {
  cursor: pointer;
}
.choice1:hover {
  text-shadow: 0 0 5px grey;
}
.choice2:hover {
  text-shadow: 0 0 5px white;
}
</style>

