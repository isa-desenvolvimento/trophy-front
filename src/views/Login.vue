<template>
  <div class="container-2">
    <card>
      <form @submit.prevent="userLogin" class="sign-up neon-container">
        <h3 id="title-sign-in">Sign In</h3>

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
            v-model="user.pass"
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
import { auth } from "@/service/login.service";
import Card from "@/components/Card.vue";
import { generateNeon } from "@/util/neon";

export default {
  components: { Card },
  mounted() {
    generateNeon("title-sign-in");
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        pass: ""
      }
    };
  },
  methods: {
    async userLogin() {
      console.log(this.user);
      const result = await auth(this.user);
      if (result) {
        this.$router.push("/trophy", result.data);
      } else {
        alert("error.message");
      }
    }
  }
};
</script>
