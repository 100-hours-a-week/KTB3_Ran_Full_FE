import Modal from "../ui/modal/Modal.js";

function EditModal() {
  const modal = Modal({
    title: "게시글을 수정하시겠습니까?",
    subTitle: "",
  });

  console.log("수정 모달을 클릭하였습니다.");
  document.body.appendChild(modal);

  return modal;
}

export default EditModal;
