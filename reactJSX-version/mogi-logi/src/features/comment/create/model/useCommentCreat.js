import { commentMutation, Endpoint } from "@/shared";
import { CommentCreatDto } from "./CommentCreatDto";

export const useCommentCreat = commentMutation({
  urlFn: (_, postId) => Endpoint.COMMENT.POST(postId),
  method: "POST",
  dtoFn: CommentCreatDto,
  successMessage: "댓글 생성 성공",
});
