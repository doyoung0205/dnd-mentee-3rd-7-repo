import { Tips } from "../tip/types";

export interface UserState {
  userInfo: UserInfo;
  userStoredTips: Tips;
  userCreatedTips: Tips;
}

export interface UserInfo {
  id: number;
  name: string;
  username: string;
  last_login: string;
  date_joined: string;
}
