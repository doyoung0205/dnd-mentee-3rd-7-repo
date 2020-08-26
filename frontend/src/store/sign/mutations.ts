import { MutationTree } from "vuex";
import { SignState } from "./types";

export const mutations: MutationTree<SignState> = {
  setUsername(state, username) {
    state.username = username;
  },
  clearUsername(state) {
    state.username = "";
  },
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = "";
  }
};
