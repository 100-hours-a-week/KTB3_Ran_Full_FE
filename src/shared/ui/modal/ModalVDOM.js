import h from "../../../shared/DOMutil/virtualDOM.js";
import { confirmBtn, quitBtn } from "../Button/ui/ButtonPresets.js";

export default function ModalVDOM({
  title,
  subTitle,
  confirmText = "확인",
  cancelText = "취소",
} = {}) {
  return h("div", { className: "modal-wrapper" }, [
    h("div", {}, title),
    h("div", {}, subTitle),

    h("div", { className: "buttonGroup" }, [
      quitBtn({
        text: cancelText,
        buttonProps: {
          dataset: {
            role: "modal-cancel",
          },
        },
      }),
      confirmBtn({
        text: confirmText,
        buttonProps: {
          dataset: {
            role: "modal-confirm",
          },
        },
      }),
    ]),

    h("div", {
      className: "modal-overlay",
      dataset: {
        role: "modal-cancel",
      },
    }),
  ]);
}
