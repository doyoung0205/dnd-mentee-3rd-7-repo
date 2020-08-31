// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "../index";
import { UserSignUp, UserSignIn, SignupResp, SigninResp } from "./type";

// 회원가입 API
export function signUp(userSignUp: UserSignUp): Promise<SignupResp> {
  return instance.post("user/", userSignUp, {
    withCredentials: true
  });
}

// 로그인 API
export function signIn(userSignIn: UserSignIn): Promise<SigninResp> {
  return instance.post("token/", userSignIn);
}
