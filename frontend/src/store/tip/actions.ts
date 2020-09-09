import { ActionTree } from "vuex";
import { TipState, TipSearchOption } from "./types";
import { RootState } from "../types";
import {
  fetchTips,
  fetchRecommendHashTags,
  fetchHistoriesByUserId,
  deleteHistoryByUserId
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
  },
  async DELETE_HISTORY_BY_ID({ commit }, historyId: number) {
    // getters.
    const { data } = await deleteHistoryByUserId(historyId);
    // console.log("DELETE_HISTORY_BY_ID RESULT :: ", data);
    commit("setHistories", data);
    return data;
  },
  async NEXT_TIP_LIST({ commit, getters }) {
    const tipSearchOptions = getters.getTipSearchOptions;
    tipSearchOptions.page = tipSearchOptions.page + 1;
    // console.log(" tipSearchOptions", tipSearchOptions);

    try {
      const { data } = await fetchTips(tipSearchOptions);
      // console.log("NEXT_TIP_LIST RESULT :: ", data);

      commit("nextPage");
      commit("addTips", data);
    } catch (error) {
      console.log("error", error);
    }
  }
};
