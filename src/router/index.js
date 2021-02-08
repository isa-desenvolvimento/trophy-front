import Vue from "vue";
import VueRouter from "vue-router";

import Trophy from "@/views/Trophy.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import { isSignedIn } from "@/service/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signup",
    component: Signup
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword
  },
  {
    path: "/trophy",
    name: "trophy",
    component: Trophy,
    params: true,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.API,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (!isSignedIn()) {
//     next({
//       path: "/login",
//       query: { redirect: to.fullPath }
//     });
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  if (!isSignedIn()) next({ path: "/login", query: { redirect: to.fullPath } });
  else next();
});

export default router;
