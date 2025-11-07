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
  app.appendChild(pageContent);
}

window.addEventListener("hashchange", main);

window.addEventListener("load", main);

// //history 객체 안에 data, title, url|string 이 들어감
// history.pushState({}, null, '/home');
// //html이 로드되면 mainj가 로드되고 제일먼저 /home으로 이동

// document.getElementById('app').innerHTML = //여기에 라우터가 들어가야지 ;

// //첫번째 위치는 현재 /init
