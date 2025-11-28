import h from "../../../shared/DOMutil/virtualDOM.js";
import { confirmBtn, quitBtn } from "../Button/ui/ButtonPresets.js";

export default function ModalVDOM({ title, subTitle, onClick }) {
  return h("div", { className: "modal-wrapper" }, [
    h("div", {}, title),
    h("div", {}, subTitle),

    h("div", { className: "buttonGroup" }, [
      quitBtn({ onClick: () => {} }),
      confirmBtn({ onClick }),
    ]),

    h("div", { className: "modal-overlay" }),
  ]);
}
