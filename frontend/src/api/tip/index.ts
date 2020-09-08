// // 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "../index";
import { TipSearchOption } from "@/store/tip/types";
import { TipListResp, HistoryResp } from "./type";
import { AxiosPromise } from "axios";

//  TIP 조회
export function fetchTipList(
  tipSearchOption: TipSearchOption
): AxiosPromise<TipListResp> {
  return instance.get("tip/", {
    params: tipSearchOption
  });
}

// 과거 조회 데이터 조회
export function fetchHistoriesByUserId(
  userId: number
): AxiosPromise<HistoryResp> {
  return instance.post(`history/${userId}`);
}

// 과거 조회 데이터 삭제하기
export function deleteHistoryByUserId(userId: number): AxiosPromise<{}> {
  return instance.delete(`history/${userId}`);
}

// 추천 검색어들 조회
export function fetchRecommendHashTags(): AxiosPromise<TipListResp> {
  return instance.get("/hashtag/recommend_hashtags");
}
