import { routerPage } from "../../app/router.js/router.js";
import rerender, { resetVDOM } from "../DOMutil/rerender.js";
import { getState, setCurrentState } from "../state/currentState.js";
import { setCurrentEffect } from "../state/currentEffect.js";
import { setCurrentPage } from "../state/currentPage.js";
import BoardPostDetailPageVDOM from "../../pages/board/detail/ui/BoardPostDetailPageVDOM.js";
import BoardPostDetailEffect from "../../pages/board/detail/model/BoardPostDetailEffect.js";
import postDetailState from "../../pages/board/detail/model/BoardPostDetailState.js";
import commentCreatCardEffect from "../../widgets/comment/model/commentCreatCardEffect.js";
import BoardPostCreatPageVDOM from "../../pages/board/create/ui/BoardPostCreatPageVDOM.js";
import BoardPostCreatEffect from "../../pages/board/create/model/BoardPostCreatEffect.js";
import { BoardPostCreateState } from "../../pages/board/create/model/BoardPostCreatState.js";
import imgButtonEffect from "../../widgets/imgButton/model/imgButtonEffect.js";

let cleanupFn = null;

export function initRouter() {
  console.log("라우터 초기화");
}

export function navigateTo(path) {
  const [, route, action, id] = path.split("/");

  //게시글 상세 라우팅
  if (route === "post" && action === "get" && id) {
    resetVDOM();

    //상세페이지 기본 state
    setCurrentState({ ...postDetailState });
    //페이지 등록
    setCurrentPage(BoardPostDetailPageVDOM);
    //effect 등록
    setCurrentEffect([() => BoardPostDetailEffect(id), commentCreatCardEffect]);

    rerender();
    return;
  }
  //게시글 생성
  if (route === "post" && action === "create") {
    resetVDOM();
    setCurrentState({ ...BoardPostCreateState });
    setCurrentPage(BoardPostCreatPageVDOM);

    setCurrentEffect([BoardPostCreatEffect, imgButtonEffect]);

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
