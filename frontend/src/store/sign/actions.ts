import { ActionTree } from "vuex";
import { SignState } from "./types";
import { RootState } from "../types";
import {
  saveAuthToCookie,
  saveUserToCookie,
  saveRefreshToLocal
} from "@/utils/cookies";
import { signIn } from "@/api/sign/index";
import { UserSignIn } from "@/api/sign/type";

export const actions: ActionTree<SignState, RootState> = {
  async SIGN_IN({ commit }, userSignInData: UserSignIn) {
    const { data } = await signIn(userSignInData);
    console.log("SIGN_IN");
    console.log(data.access);
    commit("setToken", data.access);
    commit("setUsername", userSignInData.username);
    saveAuthToCookie(data.access);
    saveRefreshToLocal(data.refresh);
    saveUserToCookie(userSignInData.username);
    return data;
  }
};
