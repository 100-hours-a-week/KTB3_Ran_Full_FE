import { Endpoint } from "../../../../shared/api/endpoint.js";
import { PostUpdateDto } from "./PostUpdateDto.js";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/useApiMutation.js";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

//postId가 들어와야함
export function usePostUpdate(postId) {
  console.log(postId);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const postUpdateMutation = useApiMutation({
    url: Endpoint.POST.UPDATE(postId),
    method: "PATCH",
    dtoFn: PostUpdateDto,
    onSuccess: () => {
      queryClient.invalidateQueries(["post"], postId);
      addToast("게시글 수정 성공");
      navigate(`/post/get/${postId}`);
    },
  });

  return {
    postUpdate: postUpdateMutation.mutate,
    isLoading: postUpdateMutation.isPending,
  };
}
