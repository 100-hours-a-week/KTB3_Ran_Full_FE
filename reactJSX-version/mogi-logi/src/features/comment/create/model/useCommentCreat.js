import { Endpoint, useApiMutation } from "@/shared";
import { CommentCreatDto } from "./CommentCreatDto.js";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/shared";

//postId가 들어와야함
export function useCommentCreat(postId) {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const commentCreatMutation = useApiMutation({
    url: Endpoint.COMMENT.POST(postId),
    method: "POST",
    dtoFn: CommentCreatDto,
    onSuccess: () => {
      //캐시 posts에 저장해둔 값 캐시 무효화
      queryClient.invalidateQueries(["comments", postId]);
      addToast("댓글 생성 성공");
    },
  });

  return {
    commentCreat: commentCreatMutation.mutate,
    isLoading: commentCreatMutation.isPending,
  };
}
