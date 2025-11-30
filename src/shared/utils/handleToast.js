import { render } from "../DOMutil/render.js";
import ToastVDOM from "../ui/Toast/ToastVDOM.js";

function toast(message) {
  const toastEl = render(ToastVDOM(message)); // DOM 생성
  document.body.appendChild(toastEl);

  // 자동 제거
  setTimeout(() => toastEl.remove(), 1400);
}

export default toast;
