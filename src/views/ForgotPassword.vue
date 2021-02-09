<template>
  <div class="container-2">
    <card>
      <form
        @submit.prevent="forgetPassword"
        class="sign-up forgot-password neon-container"
      >
        <h3 id="title-forgot-password">{{ $t("FORGOT_PASSWORD") }}</h3>

        <div class="form-group">
          <label>{{ $t("EMAIL") }}</label>
          <input
            id="inp-forgetPassword-email"
            v-model="user.email"
            class="form-control input"
          />
        </div>

        <button type="submit" class="btn btn-success btn-lg btn-block">
          {{ $t("RESET_PASSWORD") }}
        </button>
      </form>
    </card>
  </div>
</template>

<script>
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
        email: ""
      }
    };
  },
  methods: {
    forgetPassword() {
      this.$store.commit("isError");
    }
  }
};
</script>
