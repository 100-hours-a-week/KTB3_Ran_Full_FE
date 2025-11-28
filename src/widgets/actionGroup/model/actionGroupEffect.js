import { render } from "../../../shared/DOMutil/render.js";
import EditModalVDOM from "../../../shared/lib/EditModalVDOM.js";
import DeleteModalVDOM from "../../../shared/lib/DeleteModalDOM.js";

export default function actionGroupEffect() {
  const buttons = document.querySelectorAll(".action-group-btn");
  if (!buttons.length) return;

  const cleanups = [];

  // 스크롤 락 헬퍼
  const lockScroll = () => {
    const prev = document.body.style.overflow; //현재꺼
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  };

  const openModal = (Component, payload, confirmKey) => {
    const unlockScroll = lockScroll(); //스크롤 락 등록

    // VDOM -> DOM 생성
    const modalEl = render(Component(payload));
    document.body.appendChild(modalEl);

    // 버튼 검색
    const confirmButton = modalEl.querySelector('[data-role="modal-confirm"]');
    const cancelButtons = Array.from(
      modalEl.querySelectorAll('[data-role="modal-cancel"]')
    );

    const close = () => {
      confirmButton?.removeEventListener("click", onConfirm);
      cancelButtons.forEach((btn) => btn.removeEventListener("click", close));

      unlockScroll();

      modalEl.remove();
    };

    const onConfirm = () => {
      payload[confirmKey]?.();
      close();
    };

    confirmButton?.addEventListener("click", onConfirm);
    cancelButtons.forEach((btn) => btn.addEventListener("click", close));

    // cleanup 등록
    cleanups.push(() => {
      confirmButton?.removeEventListener("click", onConfirm);
      cancelButtons.forEach((btn) => btn.removeEventListener("click", close));
      unlockScroll(); //스크롤 락 클린업 등록
      modalEl.remove(); //모달 삭제
    });
  };

  // action-group 버튼별 토글
  buttons.forEach((button) => {
    const wrapper = button.nextElementSibling;
    if (!wrapper || !wrapper.classList.contains("action-group-wrapper")) return;

    const toggle = (e) => {
      e.stopPropagation();
      wrapper.classList.toggle("active");
      wrapper.style.display = wrapper.classList.contains("active")
        ? "block"
        : "none";
    };

    button.addEventListener("click", toggle);
    cleanups.push(() => button.removeEventListener("click", toggle));

    wrapper.querySelectorAll(".imgBtn").forEach((item) => {
      const handler = (e) => {
        e.stopPropagation();
        const { actionType } = item.dataset;
        const payload = item.actionPayload;
        if (!payload) return;

        wrapper.classList.remove("active");
        wrapper.style.display = "none";

        if (actionType === "edit") {
          openModal(EditModalVDOM, payload, "onEdit");
        } else if (actionType === "delete") {
          openModal(DeleteModalVDOM, payload, "onDelete");
        }
      };

      item.addEventListener("click", handler);
      cleanups.push(() => item.removeEventListener("click", handler));
    });
  });

  return () => {
    cleanups.forEach((c) => c());
  };
}
