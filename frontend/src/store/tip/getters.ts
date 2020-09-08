import { GetterTree } from "vuex";
import { TipState, TipSearchOption } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<TipState, RootState> = {
  getTipSearchOptions(state): TipSearchOption {
    const { tipSearchOption } = state;
    console.log("?", tipSearchOption);
    return tipSearchOption;
  }
};
