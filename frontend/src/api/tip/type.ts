export interface HashTag {
  id: number;
  name: string;
}

export interface TipData {
  title: string;
  content: string;
  thumbnail: string;
  user:number;
  hashtags: HashTag[];
}
