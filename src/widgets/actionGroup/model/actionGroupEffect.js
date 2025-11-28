import { render } from "../../../shared/DOMutil/render.js";
import EditModalVDOM from "../../../shared/lib/EditModalVDOM.js";
import DeleteModalVDOM from "../../../shared/lib/DeleteModalDOM.js";

export default function actionGroupEffect() {
  const buttons = document.querySelectorAll(".action-group-btn");
  if (!buttons.length) return;

  const cleanups = [];

  const toggleModal = (button, modal) => {
    const toggle = (event) => {
      event.stopPropagation();
      modal.classList.toggle("active");
      modal.style.display = modal.classList.contains("active")
        ? "block"
        : "none";
    };

    button.addEventListener("click", toggle);
    cleanups.push(() => button.removeEventListener("click", toggle));
  };

  const openModal = (Component, payload, confirmKey) => {
    const modalEl = render(Component(payload));

    const close = () => {
      confirmButton.removeEventListener("click", onConfirm);
      cancelTargets.forEach((target) =>
        target.removeEventListener("click", close)
      );
      modalEl.remove();
    };

    const onConfirm = () => {
      payload[confirmKey]?.();
      close();
    };

    document.body.appendChild(modalEl);

    const confirmButton = modalEl.querySelector('[data-role="modal-confirm"]');
    confirmButton?.addEventListener("click", onConfirm);

    const cancelTargets = Array.from(
      modalEl.querySelectorAll('[data-role="modal-cancel"]')
    );
    cancelTargets.forEach((target) => target.addEventListener("click", close));

    cleanups.push(() => {
      confirmButton?.removeEventListener("click", onConfirm);
      cancelTargets.forEach((target) =>
        target.removeEventListener("click", close)
      );
      if (modalEl.parentNode) {
        modalEl.remove();
      }
    });
  };

  buttons.forEach((button) => {
    const modal = button.nextElementSibling;
    if (!modal || !modal.classList.contains("action-group-wrapper")) return;

    toggleModal(button, modal);

    modal.querySelectorAll(".imgBtn").forEach((actionButton) => {
      const handler = (event) => {
        event.stopPropagation();
        const { actionType } = actionButton.dataset;
        const payload = actionButton.actionPayload;
        if (!payload) return;

        if (actionType === "edit") {
          openModal(EditModalVDOM, payload, "onEdit");
        } else if (actionType === "delete") {
          openModal(DeleteModalVDOM, payload, "onDelete");
        }

        modal.classList.remove("active");
        modal.style.display = "none";
      };

      actionButton.addEventListener("click", handler);
      cleanups.push(() => actionButton.removeEventListener("click", handler));
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
