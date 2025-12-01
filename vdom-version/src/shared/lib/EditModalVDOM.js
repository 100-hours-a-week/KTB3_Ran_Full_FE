import ModalVDOM from "../ui/modal/ModalVDOM.js";

export default function EditModalVDOM({ domainType }) {
  return ModalVDOM({
    title: `${domainType}을 수정하시겠습니까?`,
    subTitle: "",
    confirmText: "수정",
  });
}
