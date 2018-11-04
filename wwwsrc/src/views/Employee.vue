<template>
    <div class="employee container-fluid h100 bg-success">
        <h1>target hit</h1>
        <h1>{{e}}</h1>
    </div>
</template>
<script>
export default {
  name: "employee",
  props: ["e"],
  mounted() {
    this.$store.dispatch("getTimes", this.e.id);
  }
};
</script>
<style>
</style>
