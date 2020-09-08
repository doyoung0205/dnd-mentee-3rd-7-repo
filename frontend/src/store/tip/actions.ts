import { ActionTree } from "vuex";
import { TipState, TipSearchOption } from "./types";
import { RootState } from "../types";
import { fetchTipList } from "@/api/tip";

export const actions: ActionTree<TipState, RootState> = {
  async FETCH_TIP_LIST({ commit }, tipSearchOptions: TipSearchOption) {
    const { data } = await fetchTipList(tipSearchOptions);
    console.log("FETCH_TIP_LIST RESULT :: ", data);
    commit("setTipListResp", data);
    return data;
  }
};
