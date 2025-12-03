import { useState } from "react";
import { ActionGroupButton } from "./ActionGroupButton";
import { ActionGroup } from "./ActionGroup";
import "../style/actionGroup.css";

export function ActionGroupContainer({
  domainType,
  postId,
  commentId,
  onEdit,
  onDelete,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="action-group-container" style={{ position: "relative" }}>
      <ActionGroupButton onClick={() => setOpen(!open)} />
      {/*true로 바뀌면 컴포넌트 추가 */}
      {open && (
        <div className="action-group-popup">
          <ActionGroup
            domainType={domainType}
            onEdit={() => {
              onEdit?.({ postId, commentId });
              {
                /*옵셔널 체인으로 바로 처리 */
              }
              setOpen(false);
            }}
            onDelete={() => {
              onDelete?.({ postId, commentId });
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
