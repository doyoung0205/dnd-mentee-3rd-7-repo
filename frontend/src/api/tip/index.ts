import { tipInstacne } from "../index";
import { TipData } from "./type";
import { instance } from "../index";
import { TipSearchOption, HashTags, Histories, Tips } from "@/store/tip/types";
import { AxiosPromise } from "axios";

// 팁작성 API
export function WriteTip(tip: TipData) {
  return tipInstacne.post("", tip, {
    withCredentials: true
  });
}

// 팁조회 API
export function GetTip(id: string) {
  return tipInstacne.post(`/${id}`, {
    withCredentials: true
  });
// // 로그인, 회원 가입, (ex) 회원 탈퇴

//  TIP 조회
export function fetchTips(
  tipSearchOption: TipSearchOption
): AxiosPromise<Tips> {
  return instance.get("tip", {
    params: tipSearchOption
  });
}

// 과거 조회 데이터 조회
export function fetchHistoriesByUserId(
  userId: number
): AxiosPromise<Histories> {
  return instance.get(`/user/${userId}/histories`);
}

// 과거 조회 데이터 삭제하기
export function deleteHistoryByUserId(userId: number): AxiosPromise<{}> {
  return instance.delete(`history/${userId}`);
}

// 추천 검색어들 조회
export function fetchRecommendHashTags(): AxiosPromise<HashTags> {
  return instance.get("/hashtag/recommend-hashtags");
}
