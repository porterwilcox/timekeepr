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
    </div>
</template>
<script>
export default {
    name: 'employee-register',
    methods: {
        home() {
            this.$router.push({path: '/'})
        }
    }
}
</script>
<style>

</style>