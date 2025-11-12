import Modal from "../ui/modal/Modal.js";

function DeleteModal() {
  const modal = Modal({
    title: "게시글을 삭제하시겠습니까?",
    subTitle: "삭제한 내용은 복구할 수 없습니다.",
  });
  console.log("삭제 모달을 클릭하였습니다.");
  //body 자체에 appdend를 해야됨
  document.body.appendChild(modal);
  return modal;
}

export default DeleteModal;
