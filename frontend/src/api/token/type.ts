import { AxiosResp } from "../type";

export interface TokenData {
  access: string;
  refresh: string;
}

export interface TokenRef {
  refresh: string;
}

export interface DecodedToken {
  exp: number;
}
export interface TokenResp extends AxiosResp {
  data: TokenData;
}
