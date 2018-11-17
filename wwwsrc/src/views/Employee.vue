<template>
    <div v-if="e" class="employee container-fluid h100">
      <!-- should've made this a component -->
        <div class="row bg-secondary h25">
            <div class="col-10 d-flex justify-content-center align-items-center">
                <h1>{{e.firstName}} {{e.lastName}}</h1>
            </div>
            <div class="col-2 d-flex justify-content-end align-items-center">
                <button @click="home()" class="btn btn-outline-dark">home</button>
            </div>
            <div class="col col-md-10 offset-md-1 text-center">
              <h4>{{hours}} hrs worked</h4>
            </div>
        </div>
        <div class="actions row w-100 justify-content-around">
          <button class="btn btn-dark">Only Unpaid</button>
          <button onclick="confirmPaid()" class="btn btn-dark">Confirm Paid</button>
        </div>
        <div v-if="!times.length" class="row h65 mt5">
          <div class="col-10 offset-1 col-md-8 col-md-2">
            <h2>{{e.firstName}} doens't have any clock-in's.</h2>
          </div>
        </div>
        <div v-else class="row h65 mt5 justify-content-around">
          <div v-for="t in times" :key="t.id" :id="t.id" :class="t.isPaid ? 'col-10 offset-1 col-md-3 pb-5 paid' : 'col-10 offset-1 col-md-3 pb-5 unpaid'">
            <div class="d-flex justify-content-between align-items-center">
              <h2>{{new Date(t.clockIn).getMonth() + 1}}.{{new Date(t.clockIn).getDate()}}.{{new Date(t.clockIn).getFullYear()}}</h2>
              <b-checkbox v-if="!t.isPaid" class="text-danger clickable"><h4>$</h4></b-checkbox>
              <h4 v-else class="text-success">$</h4>
            </div>
            <hr>
            <h3>in - {{new Date(t.clockIn).getHours() > 12 ? new Date(t.clockIn).getHours() - 12 : new Date(t.clockIn).getHours()}}:{{new Date(t.clockIn).getMinutes() > 9 ? new Date(t.clockIn).getMinutes() : '0' + new Date(t.clockIn).getMinutes()}}</h3>
            <h3 v-if="t.clockOut">out - {{new Date(t.clockOut).getHours() > 12 ? new Date(t.clockOut).getHours() - 12 : new Date(t.clockOut).getHours()}}:{{new Date(t.clockOut).getMinutes() > 9 ? new Date(t.clockOut).getMinutes() : '0' + new Date(t.clockOut).getMinutes()}}</h3>
            <h3 v-else>out - still working</h3>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "employee",
  props: ["e"],
  mounted() {
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "login", path: "/login" });
      return
    }
    this.$store.dispatch("getTimes", this.e.id);
  },
  data() {
    return {
      hours: 0,
      dataTimes: {}
    };
  },
  computed: {
    times() {
      return this.$store.state.times;
    }
  },
  methods: {
    home() {
      this.$router.push({ name: "home" });
    },
    total() {
      let hrs = 0;
      for (let i = 0; i < this.times.length; i++) {
        let t = this.times[i];
        if (!t.clockOut) continue;
        let out =
          new Date(t.clockOut).getHours() +
          new Date(t.clockOut).getMinutes() / 60;
        let myIn =
          new Date(t.clockIn).getHours() +
          new Date(t.clockIn).getMinutes() / 60;
        hrs += Math.abs(myIn - out); //VERY IMPORTANT! THIS ONLY CALCULATES CORRECTLY SO LONG AS NOT OVERNIGHT SHIFTS
      }
      this.hours = hrs.toFixed(2);
    },
    confirmPaid() {
      //get a template here for the confirm message
    }
  },
  watch: {
    times(val) {
      this.total();
      this.setData();
    }
  }
};
</script>
<style>
.actions {
  position: absolute;
  top: 23vh;
}
</style>
