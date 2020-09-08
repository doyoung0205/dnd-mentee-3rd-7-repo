import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { RootState } from "./types";
import { signModal } from "./signModal/index";
import { loadingModal } from "./loadingModal/index";
import { sign } from "./sign/index";
import { tip } from "./tip/index";

Vue.use(Vuex);

// Mediator pattern
const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0" // a simple property
  },
  modules: {
    signModal,
    loadingModal,
    sign,
    tip
  },
  plugins: [createPersistedState()]
};

export default new Vuex.Store<RootState>(store);
