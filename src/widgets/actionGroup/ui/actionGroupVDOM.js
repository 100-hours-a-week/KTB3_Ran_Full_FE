import h from "../../../shared/DOMutil/virtualDOM.js";
import { delBtn, editBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

export default function actionGroupVDOM({ id, type, payload, payloadId }) {
  return h(
    "div",
    {
      id: id || "action-group-wrapper",
      className: "action-group-wrapper",
      "data-type": type, // post / comment
      "data-payload-id": payloadId, // commentId or postId
    },
    [
      h("div", { className: "action-group" }, [
        editBtn({
          type,
          "data-action-type": "edit",
          "data-payload-id": payloadId,
        }),

        delBtn({
          type,
          "data-action-type": "delete",
          "data-payload-id": payloadId,
        }),
      ]),
    ],
  );
}
