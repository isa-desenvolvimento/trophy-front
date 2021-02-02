<template>
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
      <div class="col-4">{{ coins }}</div>
      <div class="col-4">{{ killed }}</div>
      <div class="col-4">{{ died }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coins", "killed", "died"],
  data() {},
};
</script>
