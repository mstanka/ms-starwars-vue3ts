import { MutationTree } from "vuex";
import { MutationTypes } from "./mutations-types";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.SET_VEHICLES](state: S, payload: []): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_VEHICLES](state, payload: []) {
    state.vehicles = payload;
  },
};
