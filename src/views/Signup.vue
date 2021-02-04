<template>
  <div class="container-2">
    <card>
      <form @submit.prevent="userRegistration" class="sign-up neon-container">
        <h3 id="title-sign-up">Sign Up</h3>

        <div class="form-group">
          <label>Name</label>
          <input
            id="inp-signup-name"
            type="text"
            class="form-control form-control-md input"
            v-model="user.name"
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            id="inp-signup-email"
            type="email"
            class="form-control form-control-md input"
            v-model="user.email"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            id="inp-signup-password"
            type="password"
            class="form-control form-control-md input"
            v-model="user.pass"
          />
        </div>

        <button type="submit" class="btn btn-success btn-sm btn-block">
          Sign Up
        </button>

        <p class="forgot-password text-right">
          Already registered
          <router-link :to="{ name: 'login' }">sign in?</router-link>
        </p>
      </form>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { generateNeon } from "@/util/neon";
import { postUser } from "@/service/user.service";

export default {
  components: { Card },
  mounted() {
    generateNeon("title-sign-up");
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
    async userRegistration() {
      const result = await postUser(this.user);
      if (result) {
        this.$router.push("/login");
      } else {
        alert("error.message");
      }
    }
  }
};
</script>
