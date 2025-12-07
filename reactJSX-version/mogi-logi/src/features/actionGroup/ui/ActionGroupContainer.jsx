import { useState } from "react";
import { ActionGroupButton } from "./ActionGroupButton";
import { ActionGroup } from "./ActionGroup";
import "../style/actionGroup.css";
import { ConfirmModal } from "@/features/modal";

export function ActionGroupContainer({
  domainType,
  postId,
  commentId,
  onEdit,
  onDelete,
}) {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  //null | delete | edit

  return (
    <div className="action-group-container" style={{ position: "relative" }}>
      <ActionGroupButton onClick={() => setOpen(!open)} />
      {/*true로 바뀌면 컴포넌트 추가 */}
      {open && (
        <div className="action-group-popup">
          <ActionGroup
            domainType={domainType}
            onEdit={() => {
              setModalType("edit");
              {
                /*옵셔널 체인으로 바로 처리 */
              }
              setOpen(false);
            }}
            onDelete={() => {
              setModalType("delete");
              setOpen(false);
            }}
          />
        </div>
      )}

      {/*모달*/}
      {modalType && (
        <ConfirmModal
          mode={modalType}
          domainType={domainType}
          onCancel={() => setModalType(null)}
          onConfirm={() => {
            if (modalType === "delete") {
              onDelete?.({ postId, commentId });
            } else if (modalType === "edit") {
              onEdit?.({ postId, commentId });
            }

            setModalType(null);
          }}
        />
      )}
    </div>
  );
}
