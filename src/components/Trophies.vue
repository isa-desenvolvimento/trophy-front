<template>
  <div class="container container-row">
    <div class="row">
      <div class="col-4" v-for="(color, index) in colors" :key="index">
        <font-awesome-icon icon="trophy" class="icon-trophy" :color="color" />
      </div>
    </div>
    <div class="row">
      <div
        class="col-4"
        v-for="(level, index) in levels"
        :key="index"
        :style="{ color: colors[index] }"
      >
        {{ level }}
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="(category, index) in categories" :key="index">
        {{ category }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["levels", "categories", "colors"]
};
</script>
