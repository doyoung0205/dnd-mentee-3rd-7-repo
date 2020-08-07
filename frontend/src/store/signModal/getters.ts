import { GetterTree } from "vuex";
import { SignModalState, CurrentView } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<SignModalState, RootState> = {
  isSignInView(state): boolean {
    const { currentView } = state;
    return currentView === CurrentView.signIn;
  },
  isSignUpView(state): boolean {
    const { currentView } = state;
    return currentView === CurrentView.signUp;
  }
};
