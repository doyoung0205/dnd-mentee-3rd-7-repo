import { GetterTree } from "vuex";
import { LoadingModalState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<LoadingModalState, RootState> = {
  isLoading(state): boolean {
    const { show } = state;
    return show;
  }
};
