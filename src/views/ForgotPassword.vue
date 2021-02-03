<template>
  <div class="container-2">
    <card>
      <form
        @submit.prevent="forgetPassword"
        class="sign-up forgot-password neon-container"
      >
        <h3 id="title-forgot-password">Forgot Password</h3>

        <div class="form-group">
          <label>Email</label>
          <input
            id="inp-forgetPassword-email"
            v-model="user.email"
            class="form-control input"
          />
        </div>

        <button type="submit" class="btn btn-success btn-lg btn-block">
          Reset password
        </button>
      </form>
    </card>
  </div>
</template>

<script>
import firebase from "firebase";
import Card from "@/components/Card.vue";
import { generateNeon } from "@/util/neon";

export default {
  components: { Card },
  mounted() {
    generateNeon("title-forgot-password");
  },
  data() {
    return {
      user: {
        email: "",
      },
    };
  },
  methods: {
    forgetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert("Check your registered email to reset the password!");
          this.user = {
            email: "",
          };
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
