import { Endpoint } from "../../../../shared/api/endpoint";
import { useApiQuery } from "../../../../shared/api/useApiQuery.js";

export function usePostDetail(postId) {
  return useApiQuery({
    queryKey: ["post", postId], //데이터 캐싱 : 전역 저장소에 postDetail이름으로 저장
    url: Endpoint.POST.DETAIL(postId),
    enabled: !!postId, //postId있을때만 실행
  });
}
