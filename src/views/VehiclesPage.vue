<template>
  <div>
    <h1>Star Wars Vehicles</h1>
    <h2 v-if="isLoading">Loading vehicles....</h2>
    <h2 v-else-if="!hasVehicles">No vehicles are available!</h2>
    <vehicle-list v-else :vehicles="vehicles"></vehicle-list>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import VehicleList from "../components/VehicleList.vue";

export default defineComponent({
  name: "VehiclesPage",
  components: { VehicleList },
  data() {
    return {
      isLoading: false,
      vehicles: [],
      hasVehicles: false,
    };
  },
  created(): void {
    this.isLoading = true;
    axios
      .get(`https://swapi.dev/api/vehicles/?page=1`)
      .then((response) => {
        this.vehicles = response.data.results;
        if (this.vehicles && this.vehicles.length > 0) {
          this.isLoading = false;
          this.hasVehicles = true;
        }
      })
      .catch((error) => console.error(error));
  },
});
</script>
