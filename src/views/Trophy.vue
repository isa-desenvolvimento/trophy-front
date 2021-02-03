<template>
  <div class="container-2 trophy-page">
    <card>
      <div class="trophy-page">
        <div class="text-center">
          <avatar id="avatar" />
        </div>
        <h1 id="name-user">Mario</h1>
        <trophies
          id="trophies"
          :categories="['Moedas', 'Matou', 'Morreu']"
          :levels="[BRONZE, SILVER, DIAMOND]"
          :colors="[BRONZE_COLOR, SILVER_COLOR, DIAMOND_COLOR]"
        />

        <hr class="my-4 line" />
        <points :coins="3000" :died="100" :killed="1000" id="points" />
      </div>
    </card>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import Card from "@/components/Card.vue";
import Avatar from "@/components/Avatar.vue";
import Trophies from "../components/Trophies.vue";
import Points from "../components/Points.vue";
import {
  BRONZE,
  SILVER,
  GOLD,
  PLATINUM,
  DIAMOND,
  BRONZE_COLOR,
  SILVER_COLOR,
  GOLD_COLOR,
  PLATINUM_COLOR,
  DIAMOND_COLOR
} from "@/util/constants";

export default {
  computed: {
    username() {
      return this.$route.params.username;
    }
  },
  components: { Card, Avatar, Trophies, Points },
  data() {
    return {
      user: {
        displayName: "",
        email: "",
        name: "Mario"
      },
      BRONZE,
      SILVER,
      GOLD,
      PLATINUM,
      DIAMOND,
      BRONZE_COLOR,
      SILVER_COLOR,
      GOLD_COLOR,
      PLATINUM_COLOR,
      DIAMOND_COLOR
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        console.log(response);
      });
  },
  created() {
    firebase.auth().onAuthStateChanged(async user => {
      if (await user) {
        this.user = user;
      } else {
        this.user = {
          displayName: "",
          email: ""
        };
      }
    });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
        });
    }
  }
};
</script>
