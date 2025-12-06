import { Endpoint } from "../../../../shared/api/endpoint";
import { CommentUpdateDto } from "../../delete/model/CommentUpdateDto.js";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/useApiMutation.js";
import { useQueryClient } from "@tanstack/react-query";

export function useCommentUpdate(postId) {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const commentUpdateMutation = useApiMutation({
    url: (form) =>
      Endpoint.COMMENT.UPDATE({
        postId: form.postId,
        commentId: form.commentId,
      }),
    method: "PATCH",
    dtoFn: CommentUpdateDto,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
      addToast("댓글 수정 성공");
    },
  });

  return {
    commentUpdate: commentUpdateMutation.mutate,
    isLoading: commentUpdateMutation.isPending,
  };
}
