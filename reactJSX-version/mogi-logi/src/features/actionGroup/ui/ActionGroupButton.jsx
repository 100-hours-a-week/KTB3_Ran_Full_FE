import { Icon } from "../../../shared/ui/icons/Icon";
import "../style/actionGroup.css";

export function ActionGroupButton({ onClick }) {
  return (
    <button
      className="action-group-btn"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Icon name="actionGroup" size={20} />
    </button>
  );
}
