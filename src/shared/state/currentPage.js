import { resetVDOM } from "../DOMutil/rerender.js";
import rerender from "../DOMutil/rerender.js";

let currentPage = null;

export function setCurrentPage(page) {
  currentPage = page;
  resetVDOM(); //페이지가 바뀌면 oldVDOM 초기화
  rerender(); //oldVDOM 해당 페이지껄로 받아옴
}

export function getCurrentPage() {
  return currentPage;
}
