import { resetVDOM } from "../DOMutil/rerender.js";
import rerender from "../DOMutil/rerender.js";

let currentPage = null;

export function setCurrentPage(page) {
  currentPage = page;
}

export function getCurrentPage() {
  return currentPage;
}
