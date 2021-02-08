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
import { _isEmpty } from "@/util/util";
import { signIn } from "@/service/auth";

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
      if (!_isEmpty(this.user)) {
        try {
          console.log(this.user);
          const result = await request("post", "/signup", { user: this.user });

          if (result) {
            const result = await signIn({ user: this.user });
            if (result.jti) {
              localStorage.setItem("user", JSON.stringify(result));
              this.$store.commit("isLoged");
              this.$store.commit("isSuccess");

              this.$router.replace({
                name: "trophy",
                path: "/trophy",
                params: result
              });
            } else {
              this.$store.commit("isError");
            }
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
