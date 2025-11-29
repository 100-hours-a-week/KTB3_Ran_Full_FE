import h from "../../../shared/DOMutil/virtualDOM.js";
import { getState } from "../../../shared/state/currentState.js";
import {
  commentCreatBtn,
  commentUpdateBtn,
} from "../../../shared/ui/Button/ui/ButtonPresets.js";

export default function commentCreatCardVDOM(post = {}) {
  const state = getState() || {};
  const commentForm = state.commentForm || {}; //댓글 폼

  //댓글 폼 형식
  const form = {
    mode: commentForm.mode || "create",
    content: commentForm.content || "",
    commentId: commentForm.commentId ?? null,
    postId: commentForm.postId ?? state.post?.id ?? post?.id ?? "",
  };

  return h("div", { className: "comment-creat-card" }, [
    h("textarea", {
      id: "comment-textarea",
      value: form.content,
      placeholder: "댓글을 입력해주세요",
    }),

    h("div", { className: "buttonWrapper", "data-mode": form.mode }, [
      form.mode === "create"
        ? commentCreatBtn({
            id: "comment-create-btn",
            postId: form.postId,
          }) //생성모드
        : commentUpdateBtn({
            id: "comment-create-btn",
            postId: form.postId,
            commentId: form.commentId,
          }),
    ]),
  ]);
}
