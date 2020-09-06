import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { LoadingModalState } from "./types";
import { RootState } from "../types";

export const state: LoadingModalState = {
  show: false
};

const namespaced = true;

export const loadingModal: Module<LoadingModalState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
