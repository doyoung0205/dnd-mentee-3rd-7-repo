import { AxiosResp } from "../type";

export interface TokenData {
  access: string;
  refresh: string;
}

export interface TokenResp extends AxiosResp {
  data: TokenData;
}
