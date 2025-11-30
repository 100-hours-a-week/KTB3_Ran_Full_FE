import { render } from "../../../shared/DOMutil/render.js";
import EditModalVDOM from "../../../shared/lib/EditModalVDOM.js";
import DeleteModalVDOM from "../../../shared/lib/DeleteModalDOM.js";
import { ContentType } from "../../../shared/lib/ContentType.js";

//모달 생성
const modalController = {
  //type : "edit", payload :payload
  open(actionType, domainType, callback) {
    //모달 컴포넌트
    const Component = actionType === "edit" ? EditModalVDOM : DeleteModalVDOM;
    const unlockScroll = lockScroll();
    const modalEl = render(Component({ domainType: ContentType[domainType] }));
    document.body.appendChild(modalEl);

    //확인버튼
    const confirmBtn = modalEl.querySelector('[data-role="modal-confirm"]');
    //취소버튼
    const cancelBtns = modalEl.querySelectorAll('[data-role="modal-cancel"]');

    //클린업
    const close = () => {
      confirmBtn?.removeEventListener("click", onConfirm);
      cancelBtns.forEach((btn) => btn.removeEventListener("click", close));
      unlockScroll();
      modalEl.remove();
    };

    //클릭시 함수 적용
    const onConfirm = () => {
      callback();
      close();
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
