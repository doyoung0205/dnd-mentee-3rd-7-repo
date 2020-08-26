// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "../index";
import { UserSignUp, UserSignIn } from "./type";

// 회원가입 API
export function signUp(userSignUp: UserSignUp) {
  return instance.post("signup", userSignUp);
}

// 로그인 API
export function signIn(userSignIn: UserSignIn) {
  return instance.post("login", userSignIn);
}
