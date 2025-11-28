import { getCurrentEffect } from "../state/currentEffect.js";
import { getCurrentPage } from "../state/currentPage.js";
import { getState } from "../state/currentState.js";
import { updateElement } from "./diffAlg.js";
import { render } from "./render.js";

let oldVDOM = null;
let cleanupList = [];

const root = document.querySelector("#app");

export function resetVDOM() {
  oldVDOM = null;
  root.innerHTML = "";
}

export default function rerender() {
  //state,page,effect 3개의 요소를 모두 전역적으로 연결
  console.log("rerender");

  const page = getCurrentPage();
  if (!page) return;

  const newVDOM = page(getState()); //상태가 반영된 loginPageVDOM이 아니라 전역적으로 반영받을수있도록하기

  //2. commit phase : cleanupList 실행 : cleanup
  if (cleanupList.length > 0) {
    cleanupList.forEach((cleanup) => {
      if (typeof cleanup === "function") {
        cleanup();
      }
    });

    //cleanupList 리셋
    cleanupList = [];
  }

  //3. commit phase : diff : DOM 패치
  if (oldVDOM == null) {
    root.appendChild(render(newVDOM));
  } else {
    updateElement(root, newVDOM, oldVDOM);
  }
  oldVDOM = newVDOM;

  //4. effect 실행 : 새로운 리스너 등록
  const effects = getCurrentEffect();

  //5. cleanupList 갱신
  if (Array.isArray(effects)) {
    cleanupList = effects
      .map((effect) => {
        if (typeof effect !== "function") return null; //타입 예외처리
        const cleanup = effect(); //effect 반환값은 항상 remove : cleanup함수
        return typeof cleanup === "function" ? cleanup : null; //타입예외처리
      })
      .filter(Boolean);
  } else if (typeof effects === "function") {
    const cleanup = effects();
    cleanupList = typeof cleanup === "function" ? [cleanup] : [];
  } else {
    cleanupList = [];
  }
}

console.log("rerender");
