import h from "../../../shared/DOMutil/virtualDOM.js";

export default function actionGroupBtnVDOM({ id = "" } = {}) {
  console.log("actionGroup");
  return h("img", {
    id,
    className: "action-group-btn",
    src: "public/icon/actionGroup_icon.svg",
    style: `
      cursor: pointer;
      width: 24px;
      height: 24px;
    `,
  });
}
