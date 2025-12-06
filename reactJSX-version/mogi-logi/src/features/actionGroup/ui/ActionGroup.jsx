import "../style/actionGroup.css";
import { Icon } from "../../../shared/ui/icons/Icon.jsx";

export function ActionGroup({ onEdit, onDelete }) {
  return (
    <div className="action-group-wrapper">
      <div className="action-group">
        <button className="action-btn" onClick={onEdit}>
          <Icon name={"edit"} size={25} />
        </button>

        <button className="action-btn danger" onClick={onDelete}>
          <Icon name={"delete"} style={{ color: "red" }} size={25} />
        </button>
      </div>
    </div>
  );
}
