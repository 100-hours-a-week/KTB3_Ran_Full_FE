//router
import { routerPage } from "./router.js/router.js";
import "../widgets/header/ui/Header.js";
import session from "../shared/utils/session.js";

function main() {
  const app = document.getElementById("app");
  let path = location.hash.replace("#", ""); //해시 제거

  //페이지를 innerHTML로 넣어주기

  //리다이렉션 -> 로그인 상태 확인
  if (path == "" || path == "/") {
    if (session.isLogout()) {
      path = "/login";
      location.hash = "/login";
    } else {
      path = "/home";
      location.hash = "/home";
    }
  }

  const Page = routerPage[path]; //현재 내 경로면 어떤 페이지가 나와야하는지

  //초기화 진행
  app.innerHTML = "";

  const header = document.createElement("base-header");
  header.textContent = "아무말 대잔치";
  app.appendChild(header);

  const container = document.createElement("div");
  container.className = "container";

  const pageContent = Page();
  container.appendChild(pageContent);

  app.appendChild(container);
}

window.addEventListener("hashchange", main);

window.addEventListener("load", main);
