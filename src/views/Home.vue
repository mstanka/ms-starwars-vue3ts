<template>
  <div class="intro">
    <img
      class="intro__img"
      src="https://images.unsplash.com/photo-1547700055-b61cacebece9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      alt=""
    />
    <div class="intro__img-overlay"></div>

    <div class="intro__title">
      <h1 class="intro__title-main">Star Wars</h1>
      <h2>Discover persons and vehicles...</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

.intro {
  width: 100%;
  min-height: 100vh;
  position: relative;

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;

    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  &__title {
    @include flex(column, center);
    position: relative;
    text-transform: uppercase;
    min-height: 100vh;
    color: $primary-color;

    &-main {
      margin-bottom: 3rem;
    }
  }
}
</style>