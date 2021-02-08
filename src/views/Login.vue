<template>
  <div class="container-2">
    <card>
      <form @submit.prevent="userLogin" class="sign-up neon-container">
        <h3 id="title-sign-in">{{ $t("SIGNIN_TITLE") }}</h3>

        <div class="form-group">
          <label>{{ $t("EMAIL") }}</label>
          <input
            id="inp-login-email"
            type="email"
            class="form-control form-control-md input"
            v-model="user.email"
          />
        </div>

        <div class="form-group">
          <label>{{ $t("PASSWORD") }}</label>
          <input
            id="inp-login-password"
            type="password"
            class="form-control form-control-md input"
            v-model="user.password"
          />
        </div>

        <button type="submit" class="btn btn-success btn-lg btn-block">
          {{ $t("SIGNIN") }}
        </button>

        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgot-password">{{
            $t("FORGOT_PASSWORD")
          }}</router-link>
        </p>
      </form>
    </card>
  </div>
</template>

<script>
import { signIn } from "@/service/auth";
import Card from "@/components/Card.vue";
import { generateNeon } from "@/util/neon";
import { signOut } from "@/service/auth";

export default {
  components: { Card },
  mounted() {
    generateNeon("title-sign-in");
    signOut();
    this.$store.commit("isLoged", false);
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async userLogin() {
      const result = await signIn({ user: this.user });
      if (result.jti) {
        localStorage.setItem("user", JSON.stringify(result));
        this.$store.commit("isSuccess");

        this.$router.replace({
          name: "trophy",
          path: "/trophy",
          params: result
        });
      } else {
        this.$store.commit("isError");
      }
    }
  }
};
</script>
