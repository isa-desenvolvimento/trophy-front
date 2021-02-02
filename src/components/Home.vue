<template>
  <div id="app" class="container">
    <card data-image="https://acegif.com/wp-content/gif/outerspace-55.gif">
    </card>
  </div>
</template>

<script>
import firebase from "firebase";
import Card from "./Card.vue";

export default {
  computed: {
       username() {
      return this.$route.params.username
    }
  },
  components: { Card },
  data() {
    return {
      user: {
        displayName: "",
        email: "",
      },
    };
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
