<template>
  <div class="container-2">
    <card>
      <form @submit.prevent="userRegistration" class="sign-up neon-container">
        <h3 id="title-sign-up">{{ $t("SIGNUP") }}</h3>

        <div class="form-group">
          <label>{{ $t("NAME") }}</label>
          <input
            id="inp-signup-name"
            type="text"
            class="form-control form-control-md input"
            v-model="user.name"
          />
        </div>

        <div class="form-group">
          <label>{{ $t("EMAIL") }}</label>
          <input
            id="inp-signup-email"
            type="email"
            class="form-control form-control-md input"
            v-model="user.email"
          />
        </div>

        <div class="form-group">
          <label>{{ $t("PASSWORD") }}</label>
          <input
            id="inp-signup-password"
            type="password"
            class="form-control form-control-md input"
            v-model="user.password"
          />
        </div>

        <button type="submit" class="btn btn-success btn-sm btn-block">
          {{ $t("SIGNUP") }}
        </button>

        <p class="forgot-password text-right">
          {{ $t("ALREADY_REGISTERED") }}
          <router-link :to="{ name: 'login' }">{{ $t("SIGNIN") }}</router-link>
        </p>
      </form>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { generateNeon } from "@/util/neon";
import request from "@/service/request";
import { isEmpty } from "@/util/util";

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
        password: ""
      }
    };
  },
  methods: {
    async userRegistration() {
      if (!isEmpty(this.user)) {
        try {
          const result = await request("post", "/signup", this.user);

          if (result) {
            this.$router.push("/login");
            this.$store.commit("isSuccess");
            // setTimeout(() => {
            //   document.getElementById("app").classList.toggle("body-singin");
            //   document.getElementById("app").classList.toggle("body-singup");
            // }, 3000);
          } else {
            this.$store.commit("isError");
          }
        } catch (error) {
          this.$store.commit("isError");
        }
      } else {
        this.$store.commit("isError");
      }
    }
  }
};
</script>
