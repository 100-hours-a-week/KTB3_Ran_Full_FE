import { commentMutation, Endpoint } from "@/shared";
import { CommentUpdateDto } from "./CommentUpdateDto";

export const useCommentUpdate = commentMutation({
  urlFn: (form) =>
    Endpoint.COMMENT.UPDATE({
      postId: form.postId,
      commentId: form.commentId,
    }),
  method: "PATCH",
  dtoFn: CommentUpdateDto,
  successMessage: "댓글 수정 성공",
});
