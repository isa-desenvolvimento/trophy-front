<template>
  <div class="container-2">
    <card>
      <form @submit.prevent="userLogin" class="sign-up">
        <h3>Sign In</h3>

        <div class="form-group">
          <label>Email address</label>
          <input
            id="inp-login-email"
            type="email"
            class="form-control form-control-md input"
            v-model="user.email"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            id="inp-login-password"
            type="password"
            class="form-control form-control-md input"
            v-model="user.password"
          />
        </div>

        <button type="submit" class="btn btn-success btn-lg btn-block">
          Sign In
        </button>

        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgot-password">Forgot password ?</router-link>
        </p>
      </form>
    </card>
  </div>
</template>

<script>
import firebase from "firebase";
import Card from "@/components/Card.vue";

export default {
  components: { Card },
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
