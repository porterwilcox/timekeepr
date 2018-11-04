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
      <div @click="empReg()" class="col-10 col-md-5 offset-md-0 bg-light d-flex justify-content-center choice1 align-items-center">
        <h3>Join a business as an employee</h3>
      </div>
      <div @click="busnReg()" class="col-10 col-md-5 offset-md-0  bg-dark text-white d-flex justify-content-center choice2 align-items-center">
        <h3>Register a new business as the manager</h3>
      </div>
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
  computed: {
    user() {
      return this.$store.state.user;
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
.choices *:hover {
  cursor: pointer;
}
.choice1:hover {
  text-shadow: 0 0 5px grey;
}
.choice2:hover {
  text-shadow: 0 0 5px white;
}
</style>

