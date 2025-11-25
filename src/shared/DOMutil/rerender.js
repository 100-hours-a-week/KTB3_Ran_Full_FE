import { getCurrentEffect } from "../state/currentEffect.js";
import { getCurrentPage } from "../state/currentPage.js";
import { getState } from "../state/currentState.js";
import { updateElement } from "./diffAlg.js";
import { render } from "./render.js";

let oldVDOM = null;
let oneEffect = null;

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
  //현재 페이지의 가상 DOM
  const newVDOM = page(getState()); //상태가 반영된 loginPageVDOM이 아니라 전역적으로 반영받을수있도록하기

  if (oldVDOM == null) {
    root.appendChild(render(newVDOM));
  } else {
    updateElement(root, newVDOM, oldVDOM);
  }
  oldVDOM = newVDOM;

  if (typeof oneEffect === "function") {
    oneEffect();
    oneEffect = null;
  }

  //DOM Patch 이후 effect 실행
  const effect = getCurrentEffect();
  if (typeof effect === "function") {
    oneEffect = effect();
  }
}

console.log("rerender");
