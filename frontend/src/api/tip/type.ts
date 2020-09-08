import { AxiosResp } from "../type";
import { Tip } from "@/store/tip/types";

export interface TipListResp extends AxiosResp {
  count: number;
  next: string;
  previous: string;
  results: Tip[];
}

export interface HistoryResp extends AxiosResp {
  id: number;
  query: string;
  date_created: string;
  user: number;
}
