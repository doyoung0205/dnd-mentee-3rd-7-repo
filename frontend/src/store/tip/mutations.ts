import { MutationTree } from "vuex";
import { TipState } from "./types";
import { TipListResp } from "@/api/tip/type";

export const mutations: MutationTree<TipState> = {
  setTipListResp(state, tipListResp: TipListResp) {
    console.log("setTipListResp");
    const { count, next, previous, results } = tipListResp;
    console.log("count", count);
    console.log("state", state);
    state.count = count;
    state.next = next;
    state.previous = previous;
    state.results = results;
  }
};
