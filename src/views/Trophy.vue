<template>
  <div class="container-2 trophy-page">
    <card>
      <div class="trophy-page">
        <div class="text-center">
          <avatar id="avatar" />
        </div>
        <h1 id="name-user">{{ user?.name }}</h1>
        <trophies
          id="trophies"
          :categories="['Moedas', 'Matou', 'Morreu']"
          :levels="levels"
          :colors="colors"
        />

        <hr class="my-4 line" />
        <points
          :coins="ranking.sum_coins"
          :died="ranking.sum_deaths"
          :killed="ranking.killed"
          id="points"
        />
      </div>
    </card>
  </div>
</template>

<script>
import { getRanking } from "@/service/game.service";
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
        id: "",
        displayName: "",
        email: "",
        name: "Mario"
      },
      levels: [],
      colors: [],
      ranking: {}
    };
  },
  mounted: async () => {
    this.ranking = await getRanking(this.user.id);
    this.ranking.killed = this.ranking.sum_kill_by_monster.reduce(
      (total, killed) => total + killed
    );

    this.levels = [
      this.ranking.rank_coins,
      this.ranking.rank_kill_monster_1,
      this.ranking.rank_deaths
    ];

    this.colors = [
      this.getColor(this.ranking.rank_coins),
      this.getColor(this.ranking.rank_kill_monster_1),
      this.getColor(this.ranking.rank_deaths)
    ];
  },
  created() {
    firebase.auth().onAuthStateChanged(async user => {
      if (await user) {
        this.user = user;
      } else {
        this.user = {
          name: "Mario",
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
    },
    getColor(rank) {
      switch (rank) {
        case BRONZE:
          return BRONZE_COLOR;

        case SILVER:
          return SILVER_COLOR;

        case GOLD:
          return GOLD_COLOR;

        case PLATINUM:
          return PLATINUM_COLOR;

        default:
          return DIAMOND_COLOR;
      }
    }
  }
};
</script>
