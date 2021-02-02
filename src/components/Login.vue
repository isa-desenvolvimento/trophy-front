<template>
  <div class="vue-tempalte">
    <form @submit.prevent="userLogin">
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
          id="inp-login-email"
          type="email"
          class="form-control form-control-lg"
          v-model="user.email"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          id="inp-login-password"
          type="password"
          class="form-control form-control-lg"
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/home");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
