import { GetterTree } from "vuex";
import { TipState, TipSearchOption } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<TipState, RootState> = {
  getTipSearchOptions(state): TipSearchOption {
    const { tipSearchOption } = state;
    return tipSearchOption;
  },
  hasNextTipList(state): boolean {
    const { next } = state;
    return next != null;
  },
  isEmptyTipList(state): boolean {
    const { results } = state;
    return results.length === 0;
  },
  isMoveScroll(state): boolean {
    const { views } = state;
    return views.isMoveScroll;
  }
};
