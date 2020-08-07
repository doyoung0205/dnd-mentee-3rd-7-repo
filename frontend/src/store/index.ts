import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { signModal } from "./signModal/index";

Vue.use(Vuex);

// Mediator pattern
const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0" // a simple property
  },
  modules: {
    signModal
  }
};

export default new Vuex.Store<RootState>(store);
