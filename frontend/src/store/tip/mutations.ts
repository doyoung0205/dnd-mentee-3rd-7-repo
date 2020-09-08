import { MutationTree } from "vuex";
import { TipState, HashTags, Histories } from "./types";
import { TipFetchResp } from "@/api/tip/type";

export const mutations: MutationTree<TipState> = {
  setTips(state, tipListResp: TipFetchResp) {
    // console.log("TipFetchResp");
    const { count, next, previous, results } = tipListResp;
    // console.log("count", count);
    // console.log("state", state);
    state.count = count;
    state.next = next;
    state.previous = previous;
    state.results = results;
  },
  addTips(state, tipListResp: TipFetchResp) {
    // console.log("addTips");
    const { count, next, previous, results } = tipListResp;
    // console.log("count", count);
    // console.log("state", state);
    state.count = count;
    state.next = next;
    state.previous = previous;
    state.results = state.results.concat(results);
  },
  updateQuery(state, query: string) {
    console.log("query", query);
    state.tipSearchOption.query = query;
  },
  nextPage(state) {
    state.tipSearchOption.page = state.tipSearchOption.page + 1;
  },
  initPage(state) {
    state.tipSearchOption.page = 1;
  },
  setRecommendHashTags(state, hashTags: HashTags) {
    // console.log("setRecommendHashTags");
    state.recommendHashTags = hashTags;
  },
  setHistories(state, histories: Histories) {
    console.log("setHistories");
    state.history = histories;
  },
  setMoveScroll(state, flag: boolean) {
    state.views.isMoveScroll = flag;
  }
};
