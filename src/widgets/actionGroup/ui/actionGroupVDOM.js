import h from "../../../shared/DOMutil/virtualDOM.js";
import { getState } from "../../../shared/state/currentState.js";
import { delBtn, editBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

//actionType 정의할게 없음
//props = { domainType, postId, commentId }
export default function actionGroupVDOM(props) {
  return h(
    "div",
    {
      className: "action-group-wrapper",
      "data-type": props.domainType, // post / comment
    },
    [
      h("div", { className: "action-group" }, [
        editBtn({
          dataset: {
            actionType: "edit",
            ...props,
          },
        }),
        delBtn({
          dataset: {
            actionType: "delete",
            ...props,
          },
        }),
      ]),
    ]
  );
}
