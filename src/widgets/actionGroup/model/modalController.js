import { render } from "../../../shared/DOMutil/render.js";
import EditModalVDOM from "../../../shared/lib/EditModalVDOM.js";
import DeleteModalVDOM from "../../../shared/lib/DeleteModalDOM.js";

//모달 생성
const modalController = {
  open(type, payload) {
    const Component = type === "edit" ? EditModalVDOM : DeleteModalVDOM;

    const unlockScroll = lockScroll();
    const modalEl = render(Component(payload));
    document.body.appendChild(modalEl);

    const confirmBtn = modalEl.querySelector('[data-role="modal-confirm"]');
    const cancelBtns = modalEl.querySelectorAll('[data-role="modal-cancel"]');

    const onConfirm = () => {
      const handler = type === "edit" ? payload.onEdit : payload.onDelete;
      handler?.();
      close();
    };

    const close = () => {
      confirmBtn?.removeEventListener("click", onConfirm);
      cancelBtns.forEach((btn) => btn.removeEventListener("click", close));
      unlockScroll();
      modalEl.remove();
    };

    confirmBtn?.addEventListener("click", onConfirm);
    cancelBtns.forEach((btn) => btn.addEventListener("click", close));
  },
};

function lockScroll() {
  const prev = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => (document.body.style.overflow = prev);
}

export default modalController;
