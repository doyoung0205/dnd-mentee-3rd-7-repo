import { MutationTree } from "vuex";
import { LoadingModalState } from "./types";

export const mutations: MutationTree<LoadingModalState> = {
  showLoading(state) {
    state.show = true;
  }
};
