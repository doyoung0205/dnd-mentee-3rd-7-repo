import { TipSearchOption, HashTags, Histories, Tips } from "@/store/tip/types";
import { AxiosPromise } from "axios";
import { instance, instanceWithAuth } from "../index";
import { tipInstacne } from "../index";
import { TipData, TipDataResp } from "./type";
import { ImgRespData, ImgDataResp } from "@/api/file/type";
// 팁작성 API
export function WriteTip(tip: TipData) {
  return tipInstacne.post("", tip, {
    withCredentials: true
  });
}

// 팁조회 API
export function GetTip(id: string): Promise<TipDataResp> {
  return tipInstacne.get(`/${id}`, {
    withCredentials: true
  });
}

export function GetTipComments(id: string): Promise<TipDataResp> {
  return tipInstacne.get(`/${id}/comments`, {
    withCredentials: true
  });
}

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
  return instanceWithAuth.get(`/user/${userId}/histories`);
}

// 과거 조회 데이터 삭제하기
export function deleteHistoryByUserId(userId: number): AxiosPromise<{}> {
  return instanceWithAuth.delete(`history/${userId}`);
}

// 추천 검색어들 조회
export function fetchRecommendHashTags(): AxiosPromise<HashTags> {
  return instance.get("/hashtag/recommend-hashtags");
}

export function submitImg(img: FormData): Promise<ImgDataResp> {
  return tipInstacne.post("/file", img, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    withCredentials: true
  });
}
