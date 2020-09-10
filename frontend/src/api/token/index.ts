// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance, instanceWithAuth } from "../index";
import { TokenData, TokenResp, TokenRef } from "./type";
import { UserData } from "../sign/type";
import { AxiosPromise } from "axios";

// 회원가입 API
export function getToken(userData: UserData): Promise<TokenResp> {
  return instance.post("token", userData, {
    withCredentials: true
  });
}

export function getRefToken(tokenData: TokenRef): Promise<TokenResp> {
  return instance.post("token/refresh", tokenData);
}

// 로그아웃 블랙리스트 API
export function tokenLiackList(tokenData: TokenRef): AxiosPromise<TokenResp> {
  return instanceWithAuth.post("token/blacklist", tokenData);
}
