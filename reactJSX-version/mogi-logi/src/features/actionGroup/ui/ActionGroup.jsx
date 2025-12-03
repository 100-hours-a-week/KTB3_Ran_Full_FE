import "../style/actionGroup.css";

export function ActionGroup({ domainType, onEdit, onDelete }) {
  return (
    <div className="action-group-wrapper">
      <div className="action-group">
        <button className="action-btn" data-type={domainType} onClick={onEdit}>
          수정
        </button>

        <button
          className="action-btn danger"
          data-type={domainType}
          onClick={onDelete}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
