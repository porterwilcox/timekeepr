<template>
    <div class="container-fluid employee-register h100">
        <div class="row bg-secondary h25">
            <div class="col-10 d-flex justify-content-center align-items-center">
                <h1>Employee Registration</h1>
            </div>
            <div class="col-2 d-flex justify-content-end align-items-center">
                <button @click="home()" class="btn btn-outline-dark">cancel</button>
            </div>
        </div>
        <div class="row mt5 h65 text-white">
            <b-form @submit.prevent="register()" class="col-10 offset-1 col-md-8 offset-md-2 bg-dark d-flex flex-column justify-content-around align-items-center">
                <h3 class="white-shadow">Enter a Business Pin</h3>
                <b-form-group>
                    <b-form-input v-model="pin" required></b-form-input>
                    <b-checkbox v-model="locationPermission" @change="getLocation()" required>I understand that by joining a business I submit to sharing my location.</b-checkbox>
                    <button type="submit" class="btn btn-outline-light mt-1">submit</button>
                </b-form-group>
            </b-form>
        </div>
    </div>
</template>
<script>
export default {
  name: "employee-register",
  mounted() {
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "login" });
    }
  },
  data() {
      return {
          pin: "",
          locationPermission: false
      }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    home() {
      this.$router.push({ path: "/" });
      this.pin = ""
      this.locationPermission = false
    },
    getLocation() {
        navigator.geolocation.getCurrentPosition(l => this.$store.commit('setUserCoords', l.coords))  
    },
    register() {
      let obj = {
        pin: this.pin,
        userId: this.user.id
      };
      this.$store.dispatch("addEmployee", obj);
    }
  }
};
</script>
<style>
.white-shadow {
  text-shadow: 0 0 5px white;
}
</style>