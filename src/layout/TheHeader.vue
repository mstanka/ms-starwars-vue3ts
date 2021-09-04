<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__links">
        <li class="nav__link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav__link">
          <router-link to="/persons">Persons</router-link>
        </li>
        <li class="nav__link">
          <router-link to="/vehicles">Vehicles</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "../style/main.scss";

.header {
  margin: 0 auto;
}

.nav {
  background: $primary-color;
  padding: 1rem 0;

  &__links {
    @include flex(column, center);
    @include media-md {
      @include flex(row, center);
    }
  }

  &__link {
    margin: 0 1rem;
    font-size: 1.8rem;
    text-transform: uppercase;

    a {
      color: $dark-color;
      padding: 0.3rem 1rem;
      border: 1px dotted $primary-color;

      &:hover,
      &:focus,
      &.router-link-exact-active {
        color: $light-color;
        background: $primary-color-dark;
        border: 1px dotted $light-color;
      }
    }
  }
}
</style>
