import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { TipState, TipSearchOption, Tips } from "./types";
import { RootState } from "../types";

export const state: TipState = {
  count: 0,
  next: "",
  previous: "",
  results: [] as Tips,
  tipSearchOption: {
    page: 1,
    query: ""
  } as TipSearchOption,
  history: [],
  recommendHashTags: [],
  views: {
    isMoveScroll: false
  }
};

const namespaced = true;

export const tip: Module<TipState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
