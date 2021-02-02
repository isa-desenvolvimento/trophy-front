import Vue from 'vue';
import  VueRouter from "vue-router";

import Home from "../components/Home.vue";
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import ForgotPassword from "../components/ForgotPassword.vue";
import Form from "../components/Form.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/form",
    name: "form-v",
    component: Form,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router;
