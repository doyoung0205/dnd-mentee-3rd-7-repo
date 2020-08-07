// 회원가입, 로그인 화면
// 추후에는 비밀번호 찾기, 아이디 찾기 들어갈 예정
export enum CurrentView {
  signIn,
  signUp
}

export interface SignModalState {
  show: boolean;
  currentView: CurrentView;
}

// export interface SignModalOption {
//   type: string;
// }
