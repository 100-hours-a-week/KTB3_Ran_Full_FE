import setState from "../state/currentState.js";

//props : comment
function handleCommentNav({ postId, commentId, content = "" }) {
  setState((prev) => ({
    ...prev,
    commentForm: {
      ...prev.commentForm,
      mode: "edit", // 수정 모드
      content,
      commentId: Number(commentId),
      postId,
    },
  }));
}

export default handleCommentNav;
