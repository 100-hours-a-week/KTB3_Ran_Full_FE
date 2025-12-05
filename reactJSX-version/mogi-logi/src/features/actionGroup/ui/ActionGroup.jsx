import "../style/actionGroup.css";

export function ActionGroup({ onEdit, onDelete }) {
  return (
    <div className="action-group-wrapper">
      <div className="action-group">
        <button className="action-btn" onClick={onEdit}>
          수정
        </button>

        <button className="action-btn danger" onClick={onDelete}>
          삭제
        </button>
      </div>
    </div>
  );
}
