import h from "../../../shared/DOMutil/virtualDOM.js";
import { delBtn, editBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

export default function actionGroupVDOM({ type, onDelete, onEdit, id }) {
  return h(
    "div",
    {
      id: id || "action-group-wrapper",
      className: "action-group-wrapper",
    },
    [
      h(
        "div",
        {
          className: "action-group",
        },
        [
          // 수정 버튼
          editBtn({ type, onClick: onEdit }),

          // 삭제 버튼
          delBtn({ type, onClick: onDelete }),
        ]
      ),
    ]
  );
}
