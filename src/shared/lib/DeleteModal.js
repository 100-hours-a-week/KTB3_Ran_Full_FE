import Modal from "../ui/modal/Modal.js";
import handlePostDelete from "./handlePostDelete.js";

function DeleteModal(action) {
  const modal = Modal({
    title: `${action.type}을 삭제하시겠습니까?`,
    subTitle: "삭제한 내용은 복구할 수 없습니다.",
    onClick: action.onDelete,
  });
  //body 자체에 appdend를 해야됨
  document.body.appendChild(modal);
  return modal;
}

export default DeleteModal;
