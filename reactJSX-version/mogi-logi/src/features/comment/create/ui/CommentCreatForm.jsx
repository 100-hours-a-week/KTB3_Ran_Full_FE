import { CommentCreateButton } from "./CommentCreateButton.jsx";
import {
  CommentUpdateButton,
  useCommentUpdate,
} from "@/features/comment/update";
import { useInput } from "@/shared";
import "../../../../entities/comment/style/comment.css";
import { useCommentCreat } from "@/features/comment/create";
import { useEffect } from "react";

export function CommentCreatForm({
  mode = "create",
  commentId = null,
  postId = "",
  initalContent = "",
  onLoad,
}) {
  const commentValue = useInput(initalContent);
  const { commentCreat, isLoading: isCreating } = useCommentCreat(postId);
  const { commentUpdate, isLoading: isUpdating } = useCommentUpdate(postId);
  const validateValue = commentValue.value;

  useEffect(() => {
    commentValue.setValue(initalContent);
  }, [initalContent]);

  const onSubmit = async () => {
    if (!validateValue) return;

    const payloadUpdate = {
      content: commentValue.value,
      postId: postId,
      commentId: commentId,
    };

    const payloadCreat = {
      content: commentValue.value,
      postId: postId,
      commentId: commentId,
    };

    if (mode === "create") {
      await commentCreat(payloadCreat);
    } else if (mode === "update") {
      await commentUpdate(payloadUpdate);
    }

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
      <div className="buttonWrapper">
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
