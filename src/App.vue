<template>
  <div id="app" class="body-singup">
    <div id="nav">
      <router-link to="/">{{ $t("SIGNUP") }}</router-link> |
      <router-link to="/login" v-if="!$store.getters.isLoged">{{
        $t("SIGNIN")
      }}</router-link>
      <router-link to="/login" v-if="$store.getters.isLoged"
        >{{ $t("LOGOUT") }}
        <font-awesome-icon icon="sign-out-alt" class="icon-logout icons"
      /></router-link>
    </div>
    <router-view />
    <div v-if="$store.getters.isError" class="alert alert-danger" role="alert">
      {{ $t("MSG_ERROR") }}
    </div>
    <div
      v-if="$store.getters.isSuccess"
      class="alert alert-success"
      role="alert"
    >
      {{ $t("MSG_SUCCESS") }}
    </div>
  </div>
</template>
