import { Endpoint } from "../../../../shared/api/endpoint";
import { useApiQuery } from "../../../../shared/api/useApiQuery.js";

export function usePostDetail(postId) {
  return useApiQuery({
    queryKey: ["postDetail", postId],
    url: Endpoint.POST.DETAIL(postId),
    enabled: !!postId, //postId있을때만 실행
  });
}
