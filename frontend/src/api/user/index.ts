// // 로그인, 회원 가입, (ex) 회원 탈퇴
import { instanceWithAuth } from "../index";
import { AxiosPromise } from "axios";
import { UserInfo } from "@/store/user/types";
import { Tips } from "@/store/tip/types";

// USER 조회
export function fetchUserById(userId: number): AxiosPromise<UserInfo> {
  return instanceWithAuth.get(`user/${userId}`);
}

// USER 가 저장한 팁 리스트 조회
export function fetchUserStoredTipsByUserId(
  userId: number
): AxiosPromise<Tips> {
  return instanceWithAuth.get(`/user/${userId}/liked-posts`);
}

// USER 가 작성한 팁 리스트 조회
export function fetchUserCreatedTipsByUserId(
  userId: number
): AxiosPromise<Tips> {
  return instanceWithAuth.get(`/user/${userId}/posts`);
}
