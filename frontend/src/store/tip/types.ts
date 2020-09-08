export interface TipState {
  count: number;
  next: string; //"http://193.122.121.53/api/tip/?page=3";
  previous: string; //"http://193.122.121.53/api/tip/";
  results: Tip[];
  tipSearchOption: TipSearchOption;
  history: History[];
  recommendHashTags: RecommendHashTag[];
}

export interface Tip {
  id: number;
  title: string;
  content: string;
  number_of_likes: number;
  thumbnail: string;
  user: number;
  username: string;
  hashtags: HashTag[];
  number_of_comments: number;
  date_created: string;
  date_modified: string;
}

export type Tips = Tip[];
export interface HashTag {
  id: number;
  name: string;
}
export type HashTags = HashTag[];
export interface TipSearchOption {
  page: number;
  query: string;
}

export interface History {
  id: number;
  query: string;
  date_created: string;
  user: number;
}
export type Histories = History[];

export interface RecommendHashTag {
  id: number;
  name: string;
}
