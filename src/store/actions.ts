import axios from "axios";
import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { Mutations } from "./mutations";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutations-types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.FETCH_VEHICLES](
    { commit }: AugmentedActionContext,
    payload: array
  ): Promise<array>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.FETCH_VEHICLES]({ commit }) {
    return new Promise((resolve) => {
      const vehicles = axios.get(`https://swapi.dev/api/vehicles/?page=1`);
      console.log(vehicles);
      commit(MutationTypes.SET_VEHICLES, vehicles);
      resolve(vehicles);
    });
  },
};
