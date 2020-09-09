import { Like } from "./type";
import { likeInstacne } from "@/api/index";

export function LikeTip(data: Like) {
  return likeInstacne.post(``, data, {
    withCredentials: true
  });
}
