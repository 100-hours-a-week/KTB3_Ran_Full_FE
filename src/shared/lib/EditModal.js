import Modal from "../ui/modal/Modal.js";

function EditModal({ type, onEdit }) {
  const modal = Modal({
    title: `${type}을 수정하시겠습니까?`,
    subTitle: "",
    onClick: onEdit,
  });

  console.log("수정 모달을 클릭하였습니다.");
  document.body.appendChild(modal);

  return modal;
}

export default EditModal;
