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
      levels: ["Noob", "Noob", "Noob"],
      colors: [INITIAL_COLOR, INITIAL_COLOR, INITIAL_COLOR],
      ranking: {
        sum_coins: "⎻",
        sum_deaths: "⎻",
        killed: "⎻"
      }
    };
  },
  async mounted() {
    generateNeon("title-username");

    const result = await request("get", `trophy/${this.userId}/rank`);
    const rank = result?.data;
    this.ranking.killed = rank?.sum_kill_by_monster.reduce(
      (total, killed) => total + killed
    );

    this.levels = [
      rank?.rank_coins,
      rank?.rank_kill_monster_1,
      rank?.rank_deaths
    ];

    this.colors = [
      this.getColor(rank?.rank_coins),
      this.getColor(rank?.rank_kill_monster_1),
      this.getColor(rank?.rank_deaths)
    ];
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
