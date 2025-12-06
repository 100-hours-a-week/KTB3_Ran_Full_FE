import { Endpoint } from "../../../../shared/api/endpoint";
import { PostUpdateDto } from "../model/PostUpdateDto.js";
import { useToast } from "../../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../../shared/api/useApiMutation.js";
import { useNavigate } from "react-router-dom";

//postId가 들어와야함
export function usePostUpdate(postId) {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const postUpdateMutation = useApiMutation({
    url: Endpoint.POST.UPDATE(postId),
    method: "PATCH",
    dtoFn: PostUpdateDto,
    onSuccess: () => {
      addToast("게시글 생성 성공");
      navigate(`/post/get/${postId}`);
    },
  });

  return {
    postUpdate: postUpdateMutation.mutate,
    isLoading: postUpdateMutation.isPending,
  };
}
