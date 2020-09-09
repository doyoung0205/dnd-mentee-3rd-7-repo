import { ActionTree } from "vuex";
import { SignState } from "./types";
import { RootState } from "../types";
import {
  saveAuthToCookie,
  saveUserToCookie,
  saveUserIdToCookie,
  saveRefreshToLocal
} from "@/utils/cookies";
import { signIn } from "@/api/sign/index";
import { UserSignIn } from "@/api/sign/type";
import { DecodedToken } from "@/api/token/type";
import JwtDecode from "jwt-decode";

export const actions: ActionTree<SignState, RootState> = {
  async SIGN_IN({ commit }, userSignInData: UserSignIn) {
    const { data } = await signIn(userSignInData);
    const accessToken = data.access;
    commit("setToken", accessToken);
    commit("setUsername", userSignInData.email);

    const decodedToken = JwtDecode(accessToken) as DecodedToken;
    const userId = decodedToken.user_id;
    commit("setUserId", userId);

    saveAuthToCookie(data.access);
    saveUserIdToCookie(userId);
    saveRefreshToLocal(data.refresh);
    //saveUserToCookie(userSignInData.username);
    return data;
  }
};
