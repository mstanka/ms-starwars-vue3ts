<template>
  <li key="url">
    <p>{name}</p>
    <p>Manufacturer: <span> {manufacturer}</span></p>
    <p>Model: <span> {model} </span></p>
    <p>Passengers: <span>{passengers}</span></p>
    <p>Cargo capacity: <span>{cargo}</span></p>
    <p>Cost in credits: <span>{cost}</span></p>
  </li>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    url: String,
    name: String,
    manufacturer: String,
    model: String,
    passengers: String,
    cargo: String,
    cost: String,
  },
});
</script>
