import { MutationTree } from "vuex";
import { TipState, HashTags, Histories } from "./types";
import { TipFetchResp } from "@/api/tip/type";

export const mutations: MutationTree<TipState> = {
  setTips(state, tipListResp: TipFetchResp) {
    console.log("TipFetchResp");
    const { count, next, previous, results } = tipListResp;
    console.log("count", count);
    console.log("state", state);
    state.count = count;
    state.next = next;
    state.previous = previous;
    state.results = results;
  },
  updateQuery(state, query: string) {
    console.log("query", query);
    state.tipSearchOption.query = query;
  },
  setRecommendHashTags(state, hashTags: HashTags) {
    console.log("setRecommendHashTags");
    state.recommendHashTags = hashTags;
  },
  setHistories(state, histories: Histories) {
    console.log("setHistories");
    state.history = histories;
  }
};
