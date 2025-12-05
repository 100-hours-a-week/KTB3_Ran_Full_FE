import { CommentCreateButton } from "../../../features/comment/create/ui/CommentCreateButton";
import { CommentUpdateButton } from "../../../features/comment/update/ui/CommentUpdateButton.jsx";
import { useInput } from "../../../shared/hooks/useInput";
import "../style/comment.css";
import { useCommentCreat } from "../../../features/comment/create/hooks/useCommentCreat";

export function CommentCreatForm({
  mode = "create",
  commentId = null,
  postId = "",
  onLoad,
}) {
  const commentValue = useInput("");
  const { handleCommentCreat } = useCommentCreat();
  const validateValue = commentValue.value;

  const onSubmit = async () => {
    if (!validateValue) return;
    console.log("제출 클릭", commentValue.value, postId);
    await handleCommentCreat({ content: commentValue.value, postId: postId });
    onLoad();
    commentValue.setValue("");
  };

  const onModify = async () => {
    if (!validateValue) return;
    console.log("수정 클릭");
    await handleCommentCreat({ content: commentValue.value, postId: postId });
    onLoad();
    commentValue.setValue("");
  };

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
            onClick={onModify}
          />
        )}
      </div>
    </div>
  );
}
