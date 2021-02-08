<template>
  <div class="container-2 trophy-page">
    <card>
      <div class="trophy-page neon-container">
        <div class="text-center">
          <avatar id="avatar" />
        </div>
        <h3 id="title-username">{{ username }}</h3>
        <trophies
          id="trophies"
          :categories="['COINS', 'KILLED', 'DIED']"
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
import request from "@/service/request";
import Card from "@/components/Card.vue";
import Avatar from "@/components/Avatar.vue";
import Trophies from "@/components/Trophies.vue";
import Points from "@/components/Points.vue";
import { generateNeon } from "@/util/neon";
import {
  BRONZE,
  SILVER,
  GOLD,
  PLATINUM,
  BRONZE_COLOR,
  SILVER_COLOR,
  GOLD_COLOR,
  PLATINUM_COLOR,
  DIAMOND_COLOR,
  DIAMOND,
  INITIAL_COLOR
} from "@/util/constants";

export default {
  components: { Card, Avatar, Trophies, Points },
  data() {
    const user = this.$route.params.name
      ? this.$route.params
      : JSON.parse(localStorage.getItem("user"));

    return {
      username: user.name || "Mario",
      userId: user.id,
      levels: ["NOOB", "NOOB", "NOOB"],
      colors: [INITIAL_COLOR, INITIAL_COLOR, INITIAL_COLOR],
      ranking: {
        sum_coins: "⎻",
        sum_deaths: "⎻",
        killed: "⎻"
      }
    };
  },
  async mounted() {
    this.$store.commit("isLoged");
    generateNeon("title-username");
    try {
      const result = await request("get", `/trophy/${this.userId}/rank`);
      if (result.data) {
        const { data } = result.data;
        const sum = Object.values(data.sum_kill_by_monster).reduce(
          (total, killed) => total + killed
        );

        this.ranking = {
          sum_coins: data.sum_coins,
          sum_deaths: data.sum_deaths,
          killed: sum
        };

        const level = data.rank_kill_monster_1 || data.rank_kill_monster_2;
        this.levels = [data.rank_coins, level, data.rank_deaths];

        this.colors = [
          this.getColor(data.rank_coins),
          this.getColor(level),
          this.getColor(data.rank_deaths)
        ];
      }
    } catch (error) {
      console.warn(error);
    }
  },
  methods: {
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

        case DIAMOND:
          return DIAMOND_COLOR;

        default:
          return INITIAL_COLOR;
      }
    }
  }
};
</script>
