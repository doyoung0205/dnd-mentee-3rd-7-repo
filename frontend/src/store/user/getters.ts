import { GetterTree } from "vuex";
import { UserState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<UserState, RootState> = {
  isEmptyUserInfo(state): boolean {
    const { userInfo } = state;
    return Object.keys(userInfo).length === 0;
  },
  isEmptyUserStoredTips(state): boolean {
    return state.userStoredTips.length === 0;
  },
  isEmptyUserCreatedTips(state): boolean {
    return state.userCreatedTips.length === 0;
  }
};
