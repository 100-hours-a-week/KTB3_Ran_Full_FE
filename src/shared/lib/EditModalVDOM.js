import ModalVDOM from "../ui/modal/ModalVDOM.js";

export default function EditModalVDOM({ type, onEdit }) {
  return ModalVDOM({
    title: `${type}을 수정하시겠습니까?`,
    subTitle: "",
    onClick: onEdit,
  });
}
