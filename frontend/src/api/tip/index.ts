// 로그인, 회원 가입, (ex) 회원 탈퇴
import { tipInstacne } from "../index";
import { TipData } from "./type";

// 회원가입 API
export function WriteTip(tip: TipData) {
  return tipInstacne.post("/", tip, {
    withCredentials: true
  });
}
