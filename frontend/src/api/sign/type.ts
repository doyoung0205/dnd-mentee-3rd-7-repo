import { AxiosResp } from "../type";
import { TokenData } from "../token/type";

export interface UserData {
  username: string;
  password: string;
  email: string;
  token: string;
}

export interface UserSignUp {
  username: string;
  password: string;
  email: string;
}

export interface UserSignIn {
  username: string;
  password: string;
}

export interface SignupResp extends AxiosResp {
  data: UserData;
}

export interface SigninResp extends AxiosResp {
  data: TokenData;
}
