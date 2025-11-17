import { delBtn, editBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

//수정 삭제 버튼 그룹
function actionGroup({ type, onDelete, onEdit }) {
  const container = document.createElement("div");
  container.className = "action-group";

  const editProps = { type, onEdit };
  const deleteProps = { type, onDelete };

  const editButton = editBtn(editProps);
  const delButton = delBtn(deleteProps);

  container.appendChild(editButton);
  container.appendChild(delButton);

  return container;
}

export default actionGroup;
