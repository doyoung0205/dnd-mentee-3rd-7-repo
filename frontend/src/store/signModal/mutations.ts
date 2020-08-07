import { MutationTree } from "vuex";
import { SignModalState, CurrentView } from "./types";

export const mutations: MutationTree<SignModalState> = {
  showSignIn(state) {
    state.show = true;
    state.currentView = CurrentView.signIn;
  },
  showSignUp(state) {
    state.show = true;
    state.currentView = CurrentView.signUp;
  },
  close(state) {
    state.show = false;
  }
};
