import { Endpoint } from "../../../../shared/api/endpoint";
import { PostCreatDto } from "../model/PostCreatDto";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/useApiMutation.js";

export function usePostCreat() {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const postCreatMutation = useApiMutation({
    url: Endpoint.POST.POST,
    method: "POST",
    dtoFn: PostCreatDto,
    onSuccess: () => {
      addToast("게시글 생성 성공");
      navigate("/home");
    },
  });

  return {
    postCreat: postCreatMutation.mutate,
    isLoading: postCreatMutation.isPending,
  };
}
