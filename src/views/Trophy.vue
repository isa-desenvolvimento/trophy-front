<template>
  <div class="container-2 trophy-page">
    <card>
      <div class="trophy-page">
        <div class="text-center">
          <avatar id="avatar" />
        </div>
        <h1 id="name-user">{{ username }}</h1>
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
import { signOut } from "@/service/auth";
import Card from "@/components/Card.vue";
import Avatar from "@/components/Avatar.vue";
import Trophies from "@/components/Trophies.vue";
import Points from "@/components/Points.vue";
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
  components: { Card, Avatar, Trophies, Points },
  data() {
    return {
      username: this.$route.params.user?.name,
      levels: [],
      colors: [],
      ranking: {}
    };
  },
  async mounted() {
    const result = await request(
      "get",
      `trophy/${this.$route.params.user?.id}/rank`
    );
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
    logOut() {
      signOut();
      this.$router.push("/login");
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
