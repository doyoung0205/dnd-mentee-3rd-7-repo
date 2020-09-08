// // 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "../index";
import { TipSearchOption } from "@/store/tip/types";
import { TipListResp, HistoryResp } from "./type";

//  TIP 조회
export function fetchTipList(
  tipSearchOption: TipSearchOption
): Promise<TipListResp> {
  return instance.post("tip", tipSearchOption);
}

// 과거 조회 데이터 조회
export function fetchHistoriesByUserId(userId: number): Promise<HistoryResp> {
  return instance.post(`history/${userId}`);
}

// 과거 조회 데이터 삭제하기
export function deleteHistoryByUserId(userId: number): Promise<{}> {
  return instance.delete(`history/${userId}`);
}

// 추천 검색어들 조회
export function fetchRecommendHashTags(): Promise<TipListResp> {
  return instance.post("/hashtag/recommend_hashtags");
}
