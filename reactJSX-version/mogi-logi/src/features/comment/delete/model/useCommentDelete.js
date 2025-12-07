import { Endpoint } from "../../../../shared/api/endpoint.js";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/useApiMutation.js";

export function useCommentDelete(postId) {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const commentDeleteMutation = useApiMutation({
    url: (commentId) => Endpoint.COMMENT.DELETE({ postId, commentId }),
    method: "DELETE",
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
      addToast("댓글 삭제 완료");
    },
  });

  return {
    commentDelete: commentDeleteMutation.mutate,
    isLoading: commentDeleteMutation.isPending,
  };
}
