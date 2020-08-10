import { ActionTree } from "vuex";
import { SignState } from "./types";
import { RootState } from "../types";
import { saveAuthToCookie, saveUserToCookie } from "@/utils/cookies";
import { signIn } from "@/api/sign/index";
import { UserSignIn } from "@/api/sign/type";

export const actions: ActionTree<SignState, RootState> = {
  async SIGN_IN({ commit }, userSignInData: UserSignIn) {
    const { data } = await signIn(userSignInData);
    console.log("SIGN_IN");
    console.log(data.token);
    commit("setToken", data.token);
    commit("setUsername", data.user.username);
    saveAuthToCookie(data.token);
    saveUserToCookie(data.user.username);
    return data;
  }
};
