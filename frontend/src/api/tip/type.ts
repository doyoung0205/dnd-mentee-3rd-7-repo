import { Tips, Tip } from "@/store/tip/types";
import { AxiosResponse } from "axios";

export interface TipFetchResp {
  count: number;
  next: string; //"http://193.122.121.53/api/tip/?page=3";
  previous: string; //"http://193.122.121.53/api/tip/";
  results: Tips;
}

export interface HashTag {
  id: number;
  name: string;
}

export interface TipFetchResp {
  count: number;
  next: string; //"http://193.122.121.53/api/tip/?page=3";
  previous: string; //"http://193.122.121.53/api/tip/";
  results: Tips;
}
export interface TipData {
  title: string;
  content: string;
  thumbnail?: string;
  user: number;
  hashtags: HashTag[];
}

export interface TipDataResp extends AxiosResponse {
  data: Tip;
}
