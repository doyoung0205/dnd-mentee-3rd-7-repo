import { Tips } from "@/store/tip/types";

export interface TipFetchResp {
  count: number;
  next: string; //"http://193.122.121.53/api/tip/?page=3";
  previous: string; //"http://193.122.121.53/api/tip/";
  results: Tips;
}
