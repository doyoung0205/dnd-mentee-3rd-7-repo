import { ActionTree } from "vuex";
import { UserState } from "./types";
import { RootState } from "../types";
import {
  fetchUserById,
  fetchUserStoredTipsByUserId,
  fetchUserCreatedTipsByUserId
} from "@/api/user";

export const actions: ActionTree<UserState, RootState> = {
  async FETCH_USER_BY_ID({ commit }, userId: number) {
    const { data } = await fetchUserById(userId);
    // console.log("FETCH_USER_BY_ID RESULT :: ", data);
    commit("setUserInfo", data);
    return data;
  },
  async FETCH_USER_STORED_TIPS_BY_USER_ID({ commit }, userId: number) {
    const { data } = await fetchUserStoredTipsByUserId(userId);
    // console.log("FETCH_USER_STORED_TIPS_BY_USER_ID RESULT :: ", data);
    commit("setUserStoredTips", data);
    return data;
  },
  async FETCH_USER_CREATED_TIPS_BY_USER_ID({ commit }, userId: number) {
    const { data } = await fetchUserCreatedTipsByUserId(userId);
    // console.log("FETCH_USER_CREATED_TIPS_BY_USER_ID RESULT :: ", data);
    commit("setUserCreatedTips", data);
    return data;
  }
};
