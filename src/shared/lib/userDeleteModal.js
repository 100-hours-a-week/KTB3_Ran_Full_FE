import Modal from "../ui/modal/Modal.js";

function userDeleteModal(action) {
  const modal = Modal({
    title: "회원탈퇴 하시겠습니까?",
    subTitle: "작성된 게시글과 댓글은 삭제됩니다.",
    onClick: action,
  });

  document.body.appendChild(modal);

  return modal;
}

export default userDeleteModal;
