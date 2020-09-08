import { Tip } from "@/store/tip/types";

export interface TipListResp {
  count: number;
  next: string;
  previous: string;
  results: Tip[];
}

export interface HistoryResp {
  id: number;
  query: string;
  date_created: string;
  user: number;
}
