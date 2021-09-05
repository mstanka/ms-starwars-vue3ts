<template>
  <div>
    <h1>This is Vehicles page</h1>
    <h2 v-if="isLoading">Loading vehicles....</h2>
    <vehicle-list
      v-else-if="hasVehicles && !isLoading"
      :vehicles="vehicles"
    ></vehicle-list>
    <h2 v-else>No vehicles are available!</h2>
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
    };
  },
  created() {
    this.isLoading = true;
    return new Promise((resolve, reject) => {
      axios
        .get(`https://swapi.dev/api/vehicles/?page=1`)
        .then((response) => resolve((this.vehicles = response.data.results)))
        .catch((error) => reject(error));
      this.isLoading = false;
    });
  },
  computed: {
    hasVehicles() {
      return this.vehicles && this.vehicles.length > 0;
    },
  },
});
</script>
