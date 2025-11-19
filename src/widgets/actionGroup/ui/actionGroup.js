import { delBtn, editBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

//수정 삭제 버튼 그룹
function actionGroup({ type, onDelete, onEdit }) {
  const container = document.createElement("div");
  container.className = "action-group";
  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    #profile-modal-container-wrapper{
      display:none;
        position:absolute;
        transform: translate(-64%, 10%);
        background: #ffffff;
        border-radius:10px;
        border:1px solid var(--color-light-gray);
    }
    #profile-modal-container-wrapper.active{
      display:block;
      z-index:10;
    }

    .action-group{
      gap:0 !important;
    }


  `;

  console.log("actionGroup");

  const editProps = { type, onEdit };
  const deleteProps = { type, onDelete };

  const editButton = editBtn(editProps);
  const delButton = delBtn(deleteProps);

  container.appendChild(editButton);
  container.appendChild(delButton);

  const containerWrapper = document.createElement("div");
  containerWrapper.id = "profile-modal-container-wrapper";

  if (containerWrapper.id == "profile-modal-container-wrapper") {
    containerWrapper.classList.remove("active");
  } else {
    containerWrapper.classList.add("active");
  }

  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default actionGroup;
