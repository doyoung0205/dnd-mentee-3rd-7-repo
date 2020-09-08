import { AxiosResp } from "../type";

export interface TokenData {
  access: string;
  refresh: string;
}

export interface DecodedToken {
  exp: number;
  user_id: string;
}

export interface TokenResp extends AxiosResp {
  data: TokenData;
}
