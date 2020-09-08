import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { SignState } from "./types";
import { RootState } from "../types";
import {
  getAuthFromCookie,
  getUserFromCookie,
  getUserIdFromCookie
} from "@/utils/cookies";

export const state: SignState = {
  username: getUserFromCookie() || "",
  token: getAuthFromCookie() || "123",
  userId: getUserIdFromCookie() || "0"
};

const namespaced = false;

export const sign: Module<SignState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
