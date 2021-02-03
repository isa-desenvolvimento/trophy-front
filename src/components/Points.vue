<template>
  <div class="container container-row">
    <div class="row">
      <div class="col-4">
        <font-awesome-icon
          icon="circle-notch"
          class="icon-coins icons"
          id="icn-circle-points"
        />
      </div>
      <div class="col-4">
        <font-awesome-icon
          id="icn-pastafarianism-points"
          icon="pastafarianism"
          class="icon-pastafarianism icons"
        />
      </div>
      <div class="col-4">
        <font-awesome-icon
          icon="heart-broken"
          class="icon-heart icons"
          id="icn-heart-points"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4" id="points-coins">{{ coins }}</div>
      <div class="col-4" id="points-killed">{{ killed }}</div>
      <div class="col-4" id="points-died">{{ died }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coins", "killed", "died"]
};
</script>
