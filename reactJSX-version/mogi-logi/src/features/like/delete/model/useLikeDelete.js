import { Endpoint } from "../../../../shared/api/endpoint.js";
import { useApi } from "../../../../shared/api/useApi.js";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/useApiMutation.js";

export function useLikeDelete(postId) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const likeDeleteMutation = useApiMutation({
    url: Endpoint.LIKE.DELETE(postId),
    method: "DELETE",
    onSuccess: () => {
      queryClient.invalidateQueries(["post"], postId);
      queryClient.invalidateQueries(["posts"]);
    },
  });

  return {
    likeDelete: likeDeleteMutation.mutate,
    isLoading: likeDeleteMutation.isPending,
  };
}
