//router
import { routerPage } from "./router.js/router.js";
import "../widgets/header/ui/Header.js";
import session from "../shared/utils/session.js";
import BoardPostDetailPage from "../pages/board/detail/ui/BoardPostDetailPage.js";
import handlePostDetail from "../features/board/model/handlePostDetail.js";
import handlePostEdit from "../shared/lib/handlePostNavEdit.js";
import initialRedirect from "./router.js/initialRedirect.js";

function main() {
  const app = document.getElementById("app");
  let path = location.hash.replace("#", ""); //해시 제거

  //페이지를 innerHTML로 넣어주기
  app.innerHTML = "";

  //초기 상태
  path = initialRedirect(path);

  const header = document.createElement("base-header");
  header.textContent = "아무말 대잔치";
  app.appendChild(header);

  const container = document.createElement("div");
  container.className = "container";

  const [, route, action, id] = path.split("/");

  //이거 따로 빼야할거같은데
  //게시글 상세 보기
  //id 있을때와 없을때 분기점
  if (route === "post" && action === "get" && id) {
    //id에 해당하는 게시글 데이터 반환
    handlePostDetail(id).then((post) => {
      const pageContent = BoardPostDetailPage({
        post: post.postData,
        comments: post.commentsData,
      });

      //header 아래의 container에 페이지 업로드
      container.appendChild(pageContent);
    });
  } else if (route === "post" && action === "update" && id) {
    handlePostEdit(id);
  } else {
    //////일반 경로 처리
    const Page = routerPage[path];
    if (Page) {
      const pageContent = Page();
      //header 아래의 container에 페이지 업로드
      container.appendChild(pageContent);
    } else {
      container.textContent = "페이지를 찾을 수 없습니다.";
    }
  }

  app.appendChild(container);
}

window.addEventListener("hashchange", main);
window.addEventListener("load", main);

export default main;
