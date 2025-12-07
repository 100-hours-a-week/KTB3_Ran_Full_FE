import { Endpoint } from "../../../../shared/api/constants/endpoint.js";
import { useApi } from "../../../../shared/api/hooks/useApi.js";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/hooks/useApiMutation.js";
import { PostCreatDto } from "../../../post/create/model/PostCreatDto.js";

export function useLikeCreat(postId) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const likeCreatMutation = useApiMutation({
    url: Endpoint.LIKE.POST(postId),
    method: "POST",
    onSuccess: () => {
      //캐시 posts에 저장해둔 값 캐시 무효화
      queryClient.invalidateQueries(["post"], postId);
      queryClient.invalidateQueries(["posts"]);
      console.log("좋아요를 눌렀습니다.");
    },
  });

  return {
    likeCreat: likeCreatMutation.mutate,
    isLoading: likeCreatMutation.isPending,
  };
}
