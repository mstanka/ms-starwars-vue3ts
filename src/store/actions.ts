import axios from "axios";

export const actions = {
  async fetchVehicles(context) {
    try {
      const vehicles = await axios.get(
        `https://swapi.dev/api/vehicles/?page=1`
      );
      console.log(vehicles);
    } catch (error) {
      console.log(error);
    }
    context.commit("setVehicles", vehicles);
  },
};
