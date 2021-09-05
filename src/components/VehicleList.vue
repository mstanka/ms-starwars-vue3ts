<template>
  <ul>
    <vehicle-item
      v-for="vehicle in vehicles"
      :key="vehicle.url"
      :url="vehicle.url"
      :name="vehicle.name"
      :manufacturer="vehicle.manufacturer"
      :model="vehicle.model"
      :passengers="vehicle.passengers"
      :cargo="vehicle.cargo_capacity"
      :cost="vehicle.cost_in_credits"
    ></vehicle-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Vehicle from "../types/Vehicle";
import VehicleItem from "../components/VehicleItem.vue";

export default defineComponent({
  name: "VehicleList",
  components: {
    VehicleItem,
  },
  props: {
    vehicles: {
      required: true,
      type: Array as PropType<Vehicle[]>,
    },
  },
});
</script>
