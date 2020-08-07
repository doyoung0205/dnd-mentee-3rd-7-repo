import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { SignModalState, CurrentView } from "./types";
import { RootState } from "../types";

export const state: SignModalState = {
  show: false,
  currentView: CurrentView.signIn // 기본값으로 로그인 화면
};

const namespaced = true;

export const signModal: Module<SignModalState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
