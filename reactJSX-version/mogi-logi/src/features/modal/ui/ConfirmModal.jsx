import { PrimaryButton } from "../../../shared/ui/button/PrimaryButton";
import "../style/confirmModal.css";

export function ConfirmModal({ mode, domainType, onConfirm, onCancel }) {
  const modalConfig = {
    delete: {
      title: `${domainType}을 삭제하시겠습니까?`,
      subTitle: "삭제한 내용은 복구할 수 없습니다.",
      confirmText: "삭제",
    },
    edit: {
      title: `${domainType}을 수정하시겠습니까?`,
      subTitle: "수정 페이지로 이동합니다.",
      confirmText: "수정",
    },
  };

  const { title, subTitle, confirmText } = modalConfig[mode];
  return (
    <div className="modal-root">
      <div className="modal-overlay" onClick={onCancel}></div>

      <div className="modal-wrapper">
        <div className="modal-top">
          <div className="modal-title">{title}</div>
          <div className="modal-subtitle">{subTitle}</div>
        </div>

        <div className="modal-bottom">
          <PrimaryButton
            style={{ padding: "10px 30px", height: "50px", flex: 1 }}
            shape={"rounded"}
            color="cancel"
            onClick={onCancel}
            children={"취소"}
          />

          <PrimaryButton
            style={{ padding: "10px 30px", height: "50px", flex: 1 }}
            shape={"rounded"}
            color="primary"
            onClick={onConfirm}
            children={confirmText}
          />
        </div>
      </div>
    </div>
  );
}
