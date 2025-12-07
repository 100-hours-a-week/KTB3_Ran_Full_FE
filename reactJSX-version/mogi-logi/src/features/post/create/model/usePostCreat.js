import { Endpoint } from "../../../../shared/api/endpoint.js";
import { PostCreatDto } from "./PostCreatDto.js";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/useApiMutation.js";
import { useQueryClient } from "@tanstack/react-query";

export function usePostCreat() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const postCreatMutation = useApiMutation({
    url: Endpoint.POST.POST,
    method: "POST",
    dtoFn: PostCreatDto,
    onSuccess: () => {
      //캐시 posts에 저장해둔 값 캐시 무효화
      queryClient.invalidateQueries(["posts"]);
      addToast("게시글 생성 성공");
      navigate("/home");
    },
  });

  return {
    postCreat: postCreatMutation.mutate,
    isLoading: postCreatMutation.isPending,
  };
}
