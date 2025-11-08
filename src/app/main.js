//router
import LoginPage from "../pages/login/ui/loginPage.js";
import SignUpPage from "../pages/signup/ui/SignUpPage.js";
import "../widgets/header/ui/Header.js";

const routerPage = { "": LoginPage, "/signup": SignUpPage };

function main() {
  const app = document.getElementById("app");
  const path = location.hash.replace("#", ""); //해시 제거
  const Page = routerPage[path]; //현재 내 경로면 어떤 페이지가 나와야하는지
  //페이지를 innerHTML로 넣어주기

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
