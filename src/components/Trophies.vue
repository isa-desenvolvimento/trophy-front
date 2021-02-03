<template>
  <div class="container container-row">
    <div class="row">
      <div class="col-4" v-for="color in colors" :key="color">
        <font-awesome-icon icon="trophy" class="icon-trophy" :color="color" />
      </div>
    </div>
    <div class="row">
      <div
        class="col-4"
        v-for="(level, index) in levels"
        :key="level"
        :style="{ color: colors[index] }"
      >
        {{ level }}
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="category in categories" :key="category">
        {{ category }}
      </div>
    </div>
  </div>
</template>

<script>
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
  props: ["levels", "categories", "colors"],
  data() {
    return {
      trophies: ["Moedas", "Matou", "Morreu"],
      category_coins: BRONZE,
      color_coins: BRONZE_COLOR,
      category_killed: BRONZE,
      color_killed: GOLD_COLOR,
      category_died: BRONZE,
      color_died: PLATINUM_COLOR
    };
  },
  methods: {
    getCoins() {
      switch (this.coins) {
        case this.coins > 1:
          this.category_coins = BRONZE;
          this.color_coins = BRONZE_COLOR;
          break;
        case this.coins > 100:
          this.category_coins = SILVER;
          this.color_coins = SILVER_COLOR;
          break;
        case this.coins > 1000:
          this.category_coins = GOLD;
          this.color_coins = GOLD_COLOR;
          break;
        case this.coins > 10000:
          this.category_coins = PLATINUM;
          this.color_coins = PLATINUM_COLOR;
          break;
        case this.coins > 100000:
          this.category_coins = DIAMOND;
          this.color_coins = DIAMOND_COLOR;
          break;
        default:
          this.category_coins = BRONZE;
          this.color_coins = BRONZE_COLOR;
          break;
      }
    }
  }
};
</script>
