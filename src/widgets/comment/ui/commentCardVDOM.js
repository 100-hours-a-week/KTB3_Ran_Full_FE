import h from "../../../shared/DOMutil/virtualDOM.js";
import actionGroupBtnVDOM from "../../actionGroupBtn/ui/actionGroupBtnVDOM.js";
import actionGroupVDOM from "../../actionGroup/ui/actionGroupVDOM.js";
import { getState } from "../../../shared/state/currentState.js";

export default function commentCardVDOM(props) {
  const postId = getState()?.post.id;

  return h("div", { className: "comment-card" }, [
    h("div", { className: "top-area" }, [
      h("div", { className: "left" }, [
        h("div", { className: "detail" }, [
          h("div", { className: "author" }, props.author),
          h("div", { className: "date" }, props.created_at),
        ]),
      ]),

      h("div", { className: "action-wrapper" }, [
        actionGroupBtnVDOM(),
        actionGroupVDOM({
          domainType: "comment",
          postId,
          commentId: props.commentId ?? "",
          commentContent: props.content ?? "",
        }),
      ]),
    ]),

    // --- 댓글 내용 ---
    h("div", { className: "comment-content" }, props.content),
  ]);
}
