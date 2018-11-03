<template>
  <div class="home container-fluid">
    <div class="row bg-secondary h-25 justify-content-end">
      <button @click="logout()" class="btn btn-secondary">logout</button>
    </div>
    <div class="row h-75">
      <div class="col-10 offset-1 bg-primary"></div>
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
    }
  }
};
</script>
<style>
.home {
  height: 100vh;
}
</style>

