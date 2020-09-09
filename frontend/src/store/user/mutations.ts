import { MutationTree } from "vuex";
import { UserState, UserInfo } from "./types";
import { Tips } from "../tip/types";

export const mutations: MutationTree<UserState> = {
  setUserInfo(state, userInfo: UserInfo) {
    state.userInfo = userInfo;
  },
  setUserStoredTips(state, userStoredTips: Tips) {
    state.userStoredTips = userStoredTips;
  },
  setUserCreatedTips(state, userCreatedTips: Tips) {
    state.userCreatedTips = userCreatedTips;
  },
  clearUserState(state) {
    state.userInfo = {} as UserInfo;
    state.userStoredTips = [] as Tips;
    state.userCreatedTips = [] as Tips;
  }
};
