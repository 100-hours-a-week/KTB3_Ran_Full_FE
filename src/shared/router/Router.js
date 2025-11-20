import { routerPage } from "../../app/router.js/router.js";
import rerender, { resetVDOM } from "../DOMutil/rerender.js";
import { setCurrentState } from "../state/currentState.js";
import { setCurrentEffect } from "../state/currentEffect.js";
import { setCurrentPage } from "../state/currentPage.js";

let cleanupFn = null;

export function initRouter() {
  console.log("라우터 초기화");
}

//현재 경로 : 파라미터 path: location.hash.replace("#", "")
export function navigateTo(path) {
  const page = routerPage[path];

  if (!page) {
    console.error("페이지가 존재하지 않습니다:", page);
    return;
  }

  if (page.state) {
    setCurrentState(page.state);
  }

  resetVDOM();
  setCurrentEffect(page.effect);
  setCurrentPage(page.page);

  // //일단 안씀
  // // 이전 페이지 effect cleanup
  // cleanupFn?.();

  // // 상태 업데이트
  // setCurrentPage(pageName);
  // // effect 등록
  // cleanupFn = page.effects?.();
}
