<template>
    <div class="login container-fluid d-flex flex-column justify-content-center h100">
        <div class="fixed-top text-center">
                <h1>TimeKeepr</h1>
        </div>
        <div class="row d-flex align-items-center">
            <b-card v-if="loginForm" class="col-10 offset-1 col-md-8 offset-md-2 bg-dark text-white">
                <b-navbar class="d-flex justify-content-between bg-dark">
                    <h1>Login</h1>
                    <button @click="loginForm = !loginForm" class="btn btn-outline-secondary">or signup</button>
                </b-navbar>
                <b-form @submit.prevent="submit()" class="px-3">
                    <b-form-group label="email">
                        <b-form-input v-model="login.email" type="email" required></b-form-input>
                    </b-form-group>
                    <b-form-group label="password">
                        <b-form-input v-model="login.password" type="password" required></b-form-input>
                    </b-form-group>
                    <button type="submit" class="btn btn-outline-secondary">submit</button>
                </b-form>
            </b-card>
            <b-card v-else class="col-10 offset-1 col-md-8 offset-md-2 bg-secondary">
                <b-navbar class="d-flex justify-content-between bg-secondary">
                    <h1>Signup</h1>
                    <button @click="loginForm = !loginForm" class="btn btn-outline-dark">or login</button>
                </b-navbar>
                <b-form @submit.prevent="submit()" class="px-3">
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
                        <b-form-input v-model="register.password" pattern=".{6,}" required oninvalid="this.setCustomValidity('At least 6 characters')" oninput="this.setCustomValidity('')" type="password"></b-form-input>
                    </b-form-group>
                    <button type="submit" class="btn btn-outline-dark">submit</button>                    
                </b-form>
            </b-card>
        </div>
    </div>
</template>
<script>
export default {
  name: "login",
  mounted() {
      this.$store.dispatch("authenticate");
  },
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
    };
  },
  methods: {
    submit() {
      if (this.login.email) {
        this.$store.dispatch("login", this.login);
        this.login = {
          email: "",
          password: ""
        };
      } else {
        this.$store.dispatch("register", this.register);
        this.register = {
          email: "",
          password: "",
          firstName: "",
          lastName: ""
        };
      }
    }
  }
};
</script>