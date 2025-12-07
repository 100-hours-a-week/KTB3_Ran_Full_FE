import { useQuery } from "@tanstack/react-query";
import apiFetch from "../../../../shared/api/apiFetch.js";
import { Endpoint } from "../../../../shared/api/endpoint.js";

export function useComments(postId) {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await apiFetch(Endpoint.COMMENT.GET(postId), "GET");
      if (!res.status) throw new Error("댓글 조회 실패");
      return res.data;
    },
    staleTime: 1000 * 5,
  });
}
