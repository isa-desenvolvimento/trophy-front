<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login"
        >Logout <font-awesome-icon icon="sign-out-alt" class="icon-logout icons"
      /></router-link>
    </div>
    <router-view />
  </div>
</template>
