import h from "../../../shared/DOMutil/virtualDOM.js";
import { delBtn, editBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

export default function actionGroupVDOM({ type, onDelete, onEdit, id }) {
  return h(
    "div",
    {
      id: id || "action-group-wrapper",
      className: "action-group-wrapper",
      style: `
        position: absolute;
        transform: translate(-64%, 10%);
        background: #ffffff;
        border-radius: 10px;
        border: 1px solid var(--color-light-gray);
        display: none;
        z-index: 10;
      `,
    },
    [
      h(
        "div",
        {
          className: "action-group",
          style: `
            display: flex;
            flex-direction: column;
            gap: 0;
          `,
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
