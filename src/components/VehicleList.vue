<template>
  <h2 v-if="isLoading">Loading vehicles....</h2>
  <h2 v-else>No vehicles are available!</h2>
  <ul>
    <Vehicle
      v-for="vehicle in vehicles"
      :key="vehicle.url"
      :url="vehicle.url"
      :name="vehicle.name"
      :manufacturer="vehicle.manufacturer"
      :model="vehicle.model"
      :passengers="vehicle.passengers"
      :cargo="vehicle.cargo_capacity"
      :cost="vehicle.cost_in_credits"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Vehicle from "../components/Vehicle.vue";

export default defineComponent({
  name: "VehicleList",
  components: {
    Vehicle,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    vehicles() {
      return this.$store.getters.getVehicles;
    },
  },
  methods: {
    async fetchVehicles() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("fetchVehicles");
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
  },
});
</script>
