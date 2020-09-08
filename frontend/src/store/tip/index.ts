import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { TipState, TipSearchOption, History } from "./types";
import { RootState } from "../types";

export const state: TipState = {
  count: 0,
  next: "",
  previous: "",
  results: [],
  tipSearchOption: {
    query: "",
    page: 1
  } as TipSearchOption,
  history: [],
  recommendHashTags: []
};

const namespaced = true;

export const tip: Module<TipState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
