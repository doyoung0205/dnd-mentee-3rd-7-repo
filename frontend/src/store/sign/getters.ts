import { GetterTree } from "vuex";
import { SignState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<SignState, RootState> = {
  isLogin(state) {
    return state.username !== "";
  }
};
