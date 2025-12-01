import { resetState } from "../../../shared/state/currentState.js";

function logout() {
  console.log("로그아웃 됨");
  //1. 토큰 및 세션 제거
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");

  //2. 상태 값 초기화
  resetState();

  //3. 홈 또는 로그인 이동
  location.hash = "/login";
}

export default logout;
