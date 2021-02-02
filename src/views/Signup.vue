<template>
  <div class="container-2">
    <card>
      <form @submit.prevent="userRegistration" class="sign-up">
        <h3>Sign Up</h3>

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
            v-model="user.password"
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
import firebase from "firebase";
import Card from "@/components/Card.vue";

export default {
  components: { Card },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userRegistration() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              this.$router.push("/login");
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
