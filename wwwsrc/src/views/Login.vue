<template>
    <div class="login container-fluid">
        <div class="row h-25">
            <div class="col d-flex justify-content-center align-items-center">
                <h1>TimeKeepr</h1>
            </div>
        </div>
        <div class="row">
            <b-card v-if="loginForm" class="col-10 offset-1 col-md-8 offset-md-2 bg-primary text-white">
                <b-navbar class="d-flex justify-content-between bg-primary">
                    <h1>Login</h1>
                    <button @click="loginForm = !loginForm" class="btn btn-secondary">or signup</button>
                </b-navbar>
                <b-form @submit.prevent="submit()" @reset.prevent="clear()" class="px-3">
                    <b-form-group label="email">
                        <b-form-input v-model="login.email" type="email" required></b-form-input>
                    </b-form-group>
                    <b-form-group label="password">
                        <b-form-input v-model="login.password" type="password" required></b-form-input>
                    </b-form-group>
                    <button type="submit" class="btn btn-secondary">submit</button>
                </b-form>
            </b-card>
            <b-card v-else class="col-10 offset-1 col-md-8 offset-md-2 bg-secondary">
                <b-navbar class="d-flex justify-content-between bg-secondary">
                    <h1>Signup</h1>
                    <button @click="loginForm = !loginForm" class="btn btn-primary">or login</button>
                </b-navbar>
                <b-form @submit.prevent="submit()" @reset.prevent="clear()" class="px-3">
                    <b-form-group label="first name">
                        <b-form-input v-model="register.firstName" required></b-form-input>
                    </b-form-group>
                    <b-form-group label="last name">
                        <b-form-input v-model="register.lastName" required></b-form-input>
                    </b-form-group>
                    <b-form-group label="email">
                        <b-form-input v-model="register.email" required type="email"></b-form-input>
                    </b-form-group>
                    <b-form-group label="password">
                        <b-form-input v-model="register.password" required type="password"></b-form-input>
                    </b-form-group>
                    <button type="submit" class="btn btn-primary">submit</button>                    
                </b-form>
            </b-card>
        </div>
    </div>
</template>
<script>
export default {
  name: "login",
  data() {
      return {
          loginForm: true,
          login: {
              email: "",
              password: ""
          },
          register: {
              email: "",
              password: "",
              firstName: "",
              lastName: ""     
          }
      }
  },
  methods: {
      submit() {
          console.log(this.login.email)
      }
  }
};
</script>
<style>
.login {
    height: 100vh;
}
</style>
