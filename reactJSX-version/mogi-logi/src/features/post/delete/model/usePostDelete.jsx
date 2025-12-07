import { Endpoint } from "../../../../shared/api/constants/endpoint.js";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/hooks/useApiMutation.js";

export function usePostDelete(postId) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { addToast } = useToast();
  console.log(postId);

  const postDeleteMutation = useApiMutation({
    url: Endpoint.POST.DELETE(postId),
    method: "DELETE",
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      addToast("게시글 삭제 완료");
      navigate("/home");
    },
  });

  return {
    postDelete: postDeleteMutation.mutate,
    isLoading: postDeleteMutation.isPending,
  };
}
