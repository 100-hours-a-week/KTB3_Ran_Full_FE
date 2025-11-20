// router
import { routerPage } from "./router.js/router.js";
import { navigateTo } from "../shared/router/Router.js";
import "../widgets/header/ui/Header.js";
import session from "../shared/utils/session.js";
import BoardPostDetailPage from "../pages/board/detail/ui/BoardPostDetailPage.js";
import handlePostDetail from "../features/board/model/handlePostDetail.js";
import handlePostEdit from "../shared/lib/handlePostNavEdit.js";
import initialRedirect from "./router.js/initialRedirect.js";

import { initRouter } from "../shared/router/Router.js";

// 앱 첫 로딩
window.addEventListener("load", () => {
  initRouter(); // hashchange 리스너 등록
  navigateTo(location.hash.replace("#", "") || "/login");
});

// 해시 변경될 때
window.addEventListener("hashchange", () => {
  navigateTo(location.hash.replace("#", ""));
  console.log("해시 변경됨.");
});

// function main() {
//   const app = document.getElementById("app");

//   let path = location.hash.replace("#", "");

//   // 초기 리다이렉트
//   path = initialRedirect(path);

//   app.innerHTML = "";

//   // Header 렌더
//   if (path !== "/login") {
//     const header = document.createElement("base-header");
//     header.textContent = "아무말 대잔치";

//     if (path == "/home") header.dataset.mode = "Home";
//     else if (path == "/user/info" || path == "/user/password-modify")
//       header.dataset.mode = "Info";
//     else if (path == "/signup") header.dataset.mode = "Signup";

//     app.appendChild(header);
//   }

//   const container = document.createElement("div");
//   container.className = "container";

//   const [, route, action, id] = path.split("/");

//   // 게시글 상세
//   if (route === "post" && action === "get" && id) {
//     handlePostDetail(id).then((post) => {
//       const pageContent = BoardPostDetailPage({
//         post: post.postData,
//         comments: post.commentsData,
//       });
//       container.appendChild(pageContent);
//     });
//   }
//   // 게시글 수정
//   else if (route === "post" && action === "update" && id) {
//     handlePostEdit(id);
//   }
//   // 일반 라우팅
//   else {
//     const Page = routerPage[path];

//     if (Page && Page.__isVDOM) {
//       render(container, Page()); // props 제거
//     } else if (Page) {
//       container.appendChild(Page());
//     } else {
//       container.textContent = "페이지를 찾을 수 없습니다.";
//     }
//   }

//   app.appendChild(container);
// }

// window.addEventListener("hashchange", main);
// window.addEventListener("load", main);

// export default main;
