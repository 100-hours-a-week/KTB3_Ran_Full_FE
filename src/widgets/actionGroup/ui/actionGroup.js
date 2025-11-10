import { delBtn, editBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

function actionGroup() {
  const container = document.createElement("div");
  container.className = "action-group";

  const editButton = editBtn();
  const delButton = delBtn();

  container.appendChild(editButton);
  container.appendChild(delButton);

  return container;
}

export default actionGroup;
