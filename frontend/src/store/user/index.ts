import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { UserState, UserInfo } from "./types";
import { RootState } from "../types";
import { Tips } from "../tip/types";

export const state: UserState = {
  userInfo: {} as UserInfo,
  userStoredTips: [] as Tips,
  userCreatedTips: [] as Tips
};

const namespaced = true;

export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
