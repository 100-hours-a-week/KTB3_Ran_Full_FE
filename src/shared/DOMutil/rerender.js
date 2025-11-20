import { getCurrentEffect } from "../state/currentEffect.js";
import { getCurrentPage } from "../state/currentPage.js";
import { getState } from "../state/currentState.js";
import { updateElement } from "./diffAlg.js";
import { render } from "./render.js";

let oldVDOM = null;

const root = document.querySelector("#app");

export function resetVDOM() {
  oldVDOM = null;
  root.innerHTML = "";
}

//아 타입스크립트가 아니라 타입을 정의할수없어서 너무 헷갈림...
export default function rerender() {
  const page = getCurrentPage();
  if (!page) return;
  //현재 페이지의 가상 D
  const newVDOM = page(getState()); //상태가 반영된 loginPageVDOM이 아니라 전역적으로 반영받을수있도록하기

  if (oldVDOM == null) {
    root.appendChild(render(newVDOM));
  } else {
    updateElement(root, newVDOM, oldVDOM);
  }
  oldVDOM = newVDOM;

  //DOM Patch 이후 effect 실행
  const effect = getCurrentEffect();
  if (typeof effect === "function") {
    effect();
  }
}

console.log("rerender");
