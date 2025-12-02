import { CommentCreateButton } from "./CommentCreateButton";
import { CommentUpdateButton } from "./CommentUpdateButton";

export function CommentCreatForm({
  mode = "create",
  content = "",
  commentId = null,
  postId = "",
  //   onChangeContent,
}) {
  return (
    <div className="comment-creat-card">
      <textarea
        id="comment-textarea"
        value={content}
        placeholder="댓글을 입력해주세요"
        // onChange={(e) => onChangeContent(e.target.value)}
      />

      <div className="buttonWrapper" data-mode={mode}>
        {mode === "create" ? (
          <CommentCreateButton
            children={"등록"}
            id="comment-create-btn"
            postId={postId}
            shape={"square"}
          />
        ) : (
          <CommentUpdateButton
            id="comment-create-btn"
            postId={postId}
            commentId={commentId}
            children={"수정"}
            shape={"square"}
          />
        )}
      </div>
    </div>
  );
}
