import { CommentCreateButton } from "../../../features/comment/create/ui/CommentCreateButton";
import { CommentUpdateButton } from "../../../features/comment/create/ui/CommentUpdateButton";
import "../style/comment.css";

export function CommentCreatForm({
  mode = "create",
  commentId = null,
  postId = "",
  //   onChangeContent,
}) {
  return (
    <div className="comment-creat-card">
      <div className="textarea-wrapper">
        <textarea
          id="comment-textarea"
          placeholder="댓글을 입력해주세요"
          // onChange={(e) => onChangeContent(e.target.value)}
        />
      </div>

      <div className="buttonWrapper" data-mode={mode}>
        {mode === "create" ? (
          <CommentCreateButton
            postId={postId}
            children={"등록"}
            shape={"square"}
            style={{ padding: "10px 20px" }}
          />
        ) : (
          <CommentUpdateButton
            children={"수정"}
            postId={postId}
            commentId={commentId}
          />
        )}
      </div>
    </div>
  );
}
