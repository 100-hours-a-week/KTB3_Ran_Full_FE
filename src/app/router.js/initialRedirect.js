import sessionUser from "../../shared/utils/session.js";

function initialRedirect(path) {
  //리다이렉션 -> 로그인 상태 확인
  if (path == "/" || path == "") {
    if (sessionUser.isLogout()) {
      path = "/login";
      location.hash = "/login";
    } else {
      location.hash = "/home";
    }
  }

  //로그인된 상태에서 로그인 화면 접근 불가
  if (!sessionUser.isLogout() && path == "/login") location.hash = "/home";
  if (sessionUser.isLogout() && path == "/home") location.hash = "/login";
  //로그인되지 않은 상태에서 home화면 접근불가

  return path;
}

export default initialRedirect;
