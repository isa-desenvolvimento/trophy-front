<template>
  <div id="app" class="container-2">
    <card>
      <div class="text-center">
        <avatar />
      </div>
      <h1>MARIO</h1>
      <trophy :coins="3000" :died="100" :killed="1000" />

      <hr class="my-4 line" />
      <div class="container container-row">
        <div class="row">
          <div class="col-4">
            <font-awesome-icon icon="circle-notch" class="icon-coins icons" />
          </div>
          <div class="col-4">
            <font-awesome-icon
              icon="pastafarianism"
              class="icon-pastafarianism icons"
            />
          </div>
          <div class="col-4">
            <font-awesome-icon icon="heart-broken" class="icon-heart icons" />
          </div>
        </div>
        <div class="row">
          <div class="col-4">100000</div>
          <div class="col-4">100000</div>
          <div class="col-4">100000</div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import Card from "@/components/Card.vue";
import Avatar from "@/components/Avatar.vue";
import Trophy from "@/components/Trophy.vue";

export default {
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  components: { Card, Avatar, Trophy },
  data() {
    return {
      user: {
        displayName: "",
        email: "",
      },
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        console.log(response);
      });
  },
  created() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (await user) {
        this.user = user;
      } else {
        this.user = {
          displayName: "",
          email: "",
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
    },
  },
};
</script>
