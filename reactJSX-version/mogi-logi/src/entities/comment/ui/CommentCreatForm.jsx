import { CommentCreateButton } from "../../../features/comment/create/ui/CommentCreateButton";
import { CommentUpdateButton } from "../../../features/comment/update/ui/CommentUpdateButton.jsx";
import { useInput } from "../../../shared/hooks/useInput";
import "../style/comment.css";
import { useCommentCreat } from "../../../features/comment/create/hooks/useCommentCreat";
import { useCommentUpdate } from "../../../features/comment/update/hooks/useCommentUpdate.js";
import { useEffect } from "react";

export function CommentCreatForm({
  mode = "create",
  commentId = null,
  postId = "",
  initalContent = "",
  onLoad,
}) {
  const commentValue = useInput(initalContent);
  const { handleCommentCreat } = useCommentCreat();
  const { handleCommentUpdate } = useCommentUpdate();
  const validateValue = commentValue.value;

  useEffect(() => {
    commentValue.setValue(initalContent);
  }, [initalContent]);

  const onSubmit = async () => {
    if (!validateValue) return;
    console.log("제출 클릭", commentValue.value, postId);

    if (mode === "create") {
      await handleCommentCreat({ content: commentValue.value, postId: postId });
    } else if (mode === "update") {
      await handleCommentUpdate({
        content: commentValue.value,
        postId: postId,
        commentId: commentId,
      });
    }

    onLoad();
    commentValue.setValue("");
  }; // ← 여기 하나만 닫으면 됨

  return (
    <div className="comment-creat-card">
      <div className="textarea-wrapper">
        <textarea
          id="comment-textarea"
          placeholder="댓글을 입력해주세요"
          {...commentValue.bind}
        />
      </div>

      {/*버튼*/}
      <div className="buttonWrapper" data-mode={mode}>
        {mode === "create" ? (
          <CommentCreateButton
            postId={postId}
            children={"등록"}
            shape={"square"}
            style={{ padding: "10px 20px" }}
            onClick={onSubmit}
          />
        ) : (
          <CommentUpdateButton
            children={"수정"}
            postId={postId}
            commentId={commentId}
            shape={"square"}
            style={{ padding: "10px 20px" }}
            color={"primary"}
            onClick={onSubmit}
          />
        )}
      </div>
    </div>
  );
}
