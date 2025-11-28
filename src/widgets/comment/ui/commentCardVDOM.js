import h from "../../../shared/DOMutil/virtualDOM.js";
import actionGroupBtnVDOM from "../../actionGroupBtn/ui/actionGroupBtnVDOM.js";
import actionGroupVDOM from "../../actionGroup/ui/actionGroupVDOM.js";
import { ContentType } from "../../../shared/lib/ContentType.js";
import handleCommentDelete from "../../../shared/lib/handleCommentDelete.js";
import handleCommentNav from "../../../shared/lib/handleCommentNav.js";
import { Props } from "../../../shared/ui/Button/model/Props.js";

export default function commentCardVDOM(props) {
  const [, , , postId] = location.hash.split("/");

  // action button type 구성
  const actionType = {
    type: ContentType.COMMENT,
    onDelete: () => handleCommentDelete({ postId, props }),
    onEdit: () => handleCommentNav({ postId, props }),
  };

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
          type: "comment",
          payloadId: props.commentId,
          payload: {
            onEdit: () => handleCommentNav({ postId, props }),
            onDelete: () => handleCommentDelete({ postId, props }),
          },
        }),
      ]),
    ]),

    // --- 댓글 내용 ---
    h("div", { className: "comment-content" }, props.content),
  ]);
}
