import { tipInstacne } from "../index";
import { TipData } from "./type";

// 팁작성 API
export function WriteTip(tip: TipData) {
  return tipInstacne.post("/", tip, {
    withCredentials: true
  });
}

// 팁조회 API
export function GetTip(id: string) {
  return tipInstacne.post(`/${id}/`, {
    withCredentials: true
  });
}
