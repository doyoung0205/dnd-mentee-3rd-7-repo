export interface ImgData {
  file: File;
  user: number;
  id?: number;
}

export interface ImgRespData {
  file: string;
  user: number;
  id: number;
}

export interface ImgDataResp {
  data: ImgRespData;
}
