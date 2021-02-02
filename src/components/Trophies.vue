<template>
  <div class="container container-row">
    <div class="row">
      <div class="col-4">
        <font-awesome-icon
          icon="trophy"
          class="icon-trophy"
          :color="color_coins"
        />
      </div>
      <div class="col-4">
        <font-awesome-icon
          icon="trophy"
          class="icon-trophy"
          :color="color_killed"
        />
      </div>
      <div class="col-4">
        <font-awesome-icon
          icon="trophy"
          class="icon-trophy"
          :color="color_died"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4">Moedas</div>
      <div class="col-4">Matou</div>
      <div class="col-4">Morreu</div>
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
  DIAMOND_COLOR,
} from "@/util/constants";

export default {
  created() {
    this.getCoins();
  },
  props: ["coins", "killed", "died"],
  data() {
    return {
      trophy: ["Moedas", "Matou", "Morreu"],
      category_coins: BRONZE,
      color_coins: BRONZE_COLOR,
      category_killed: BRONZE,
      color_killed: GOLD_COLOR,
      category_died: BRONZE,
      color_died: PLATINUM_COLOR,
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
    },
  },
};
</script>
