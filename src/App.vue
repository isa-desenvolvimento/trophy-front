<template>
  <div id="app" class="body-singup">
    <div id="nav">
      <router-link to="/">Sign up</router-link> |
      <router-link to="/login" v-if="!$store.getters.isLoged"
        >Sign in</router-link
      >
      <router-link to="/login" v-if="$store.getters.isLoged"
        >Logout <font-awesome-icon icon="sign-out-alt" class="icon-logout icons"
      /></router-link>
    </div>
    <router-view />
    <div v-if="$store.getters.isError" class="alert alert-danger" role="alert">
      👾 OPS! Falha no engano. Tente novamente 😬
    </div>
    <div
      v-if="$store.getters.isSuccess"
      class="alert alert-success"
      role="alert"
    >
      BOA!!!! 🥳
    </div>
  </div>
</template>
