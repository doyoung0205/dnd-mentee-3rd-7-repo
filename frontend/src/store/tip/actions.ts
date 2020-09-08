import { ActionTree } from "vuex";
import { TipState, TipSearchOption } from "./types";
import { RootState } from "../types";
import {
  fetchTips,
  fetchRecommendHashTags,
  fetchHistoriesByUserId
} from "@/api/tip";

export const actions: ActionTree<TipState, RootState> = {
  async FETCH_TIPS({ commit }, tipSearchOptions: TipSearchOption) {
    const { data } = await fetchTips(tipSearchOptions);
    // console.log("FETCH_TIP_LIST RESULT :: ", data);
    commit("setTips", data);
    return data;
  },
  async FETCH_RECOMMEND_HASH_TAGS({ commit }) {
    const { data } = await fetchRecommendHashTags();
    // console.log("FETCH_RECOMMEND_HASH_TAGS RESULT :: ", data);
    commit("setRecommendHashTags", data);
    return data;
  },
  async FETCH_HISOTRIES_BY_USER_ID({ commit }, userId: number) {
    // getters.
    const { data } = await fetchHistoriesByUserId(userId);
    console.log("FETCH_HISOTRIES_BY_USER_ID RESULT :: ", data);
    commit("setHistories", data);
    return data;
  }
};
