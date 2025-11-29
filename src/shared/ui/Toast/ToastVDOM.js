import h from "../../DOMutil/virtualDOM.js";

export default function ToastVDOM(message) {
  return h(
    "div",
    { className: "toast-wrapper" },
    h("div", { className: "toast", "data-type": "Info" }, message)
  );
}
