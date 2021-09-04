<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import "./style/main.scss";
</style>
