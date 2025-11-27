import { routerPage } from "../../app/router.js/router.js";
import rerender, { resetVDOM } from "../DOMutil/rerender.js";
import {getState, setCurrentState} from "../state/currentState.js";
import { setCurrentEffect } from "../state/currentEffect.js";
import { setCurrentPage } from "../state/currentPage.js";
import BoardPostDetailPageVDOM from "../../pages/board/detail/ui/BoardPostDetailPageVDOM.js";
import BoardPostDetailEffect from "../../pages/board/detail/model/BoardPostDetailEffect.js";
import postDetailState from "../../pages/board/detail/model/BoardPostDetailState.js";

let cleanupFn = null;

export function initRouter() {
  console.log("라우터 초기화");
}

//현재 경로 : 파라미터 path: location.hash.replace("#", "")
export function navigateTo(path) {
  const [, route, action, id] = path.split("/");

  //게시글 상세 라우팅
  if (route === "post" && action === "get" && id) {
    resetVDOM();

      //상세페이지 기본 state
      setCurrentState({...postDetailState});
    //페이지 등록
    setCurrentPage(BoardPostDetailPageVDOM);
    setCurrentEffect(() => BoardPostDetailEffect(id));


    rerender();
    return;
  }
  //게시글 수정
  if (route === "post" && action === "update" && id) {
    resetVDOM();

    setCurrentEffect(() => handlePostEditEffect(id));
    setCurrentPage(EditPostVDOM);
    setCurrentState({});
    rerender();
    return;
  }

  //기존 일반 라우팅
  const page = routerPage[path];
  if (!page) {
    console.error("없는 페이지 입니다. :", path);
    return;
  }

  resetVDOM();

  if (page.state) {
    setCurrentState(page.state);
  }

  setCurrentEffect(page.effect);
  setCurrentPage(page.page);

  rerender();
}
