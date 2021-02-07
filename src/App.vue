<template>
  <div id="app" class="body-singup">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login" v-if="!this.$store.state.isLogedIn"
        >Signin</router-link
      >
      <router-link to="/login" v-if="this.$store.state.isLogedIn"
        >Logout <font-awesome-icon icon="sign-out-alt" class="icon-logout icons"
      /></router-link>
    </div>
    <router-view />
  </div>
</template>
