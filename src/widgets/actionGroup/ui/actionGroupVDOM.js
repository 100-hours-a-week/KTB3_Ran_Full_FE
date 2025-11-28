import h from "../../../shared/DOMutil/virtualDOM.js";
import { delBtn, editBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

export default function actionGroupVDOM({ type, payload, payloadId }) {
  return h(
    "div",
    {
      className: "action-group-wrapper",
      "data-type": type, // post / comment
      "data-payload-id": payloadId, // commentId or postId
    },
    [
      h("div", { className: "action-group" }, [
        editBtn({ action: payload }),
        delBtn({ action: payload }),
      ]),
    ]
  );
}
