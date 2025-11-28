import ModalVDOM from "../ui/modal/ModalVDOM.js";

export default function DeleteModalVDOM({ type }) {
  return ModalVDOM({
    title: `${type}을 삭제하시겠습니까?`,
    subTitle: "삭제한 내용은 복구할 수 없습니다.",
    confirmText: "삭제",
  });
}
