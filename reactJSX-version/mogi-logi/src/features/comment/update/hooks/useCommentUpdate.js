import { Endpoint } from "../../../../shared/api/endpoint";
import { CommentUpdateDto } from "../../delete/model/CommentUpdateDto.js";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/useApiMutation.js";
import { useQueryClient } from "@tanstack/react-query";

export function useCommentUpdate(postId, commentId) {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const commentCreatMutation = useApiMutation({
    url: Endpoint.COMMENT.UPDATE({ postId, commentId }),
    method: "PATCH",
    dtoFn: CommentUpdateDto,
    onSuccess: () => {
      //캐시 posts에 저장해둔 값 캐시 무효화
      addToast("댓글 수정 성공");
    },
  });

  return {
    commentUpdate: commentCreatMutation.mutate,
    isLoading: commentCreatMutation.isPending,
  };
}
