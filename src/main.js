import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faTrophy,
  faCircleNotch,
  faPastafarianism,
  faHeartBroken,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import firebase from "firebase/app";
import router from "./router";
import FlowForm from "@ditdot-dev/vue-flow-form";
Vue.config.productionTip = false;

import "@/assets/css/main.scss";

const firebaseConfig = {
  apiKey: "AIzaSyDcpMGpO4KeWa5Y5yljbuug-HknmLgmhN8",
  authDomain: "iminer-46188.firebaseapp.com",
  projectId: "iminer-46188",
  storageBucket: "iminer-46188.appspot.com",
  messagingSenderId: "228245190433",
  appId: "1:228245190433:web:c729c2f6594da42f3eb060",
  measurementId: "G-BWS0Q2RG6N"
};

firebase.initializeApp(firebaseConfig);
library.add([
  faUserSecret,
  faTrophy,
  faCircleNotch,
  faPastafarianism,
  faHeartBroken,
  faSignOutAlt
]);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  BootstrapVue,
  IconsPlugin,
  FlowForm,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount("#app");
