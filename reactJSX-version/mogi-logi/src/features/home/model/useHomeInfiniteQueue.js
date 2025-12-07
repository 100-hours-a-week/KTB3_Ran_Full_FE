import { useInfiniteQuery } from "@tanstack/react-query";
import { Endpoint } from "../../../shared/api/constants/endpoint.js";
import apiFetch from "../../../shared/api/base/apiFetch.js";

export function useHomeInfiniteQueue() {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam = null }) => {
      const res = await apiFetch(
        `${Endpoint.POST.POST}?cursor=${pageParam ?? ""}&size=10`,
        "GET",
      );

      if (!res.status || res.status !== "OK") {
        throw new Error("게시글 조회 실패");
      }

      return res.data;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },
    // 생성/좋아요 등 무효화 후 홈으로 돌아오면 항상 최신 데이터를 받는다.
    refetchOnMount: "always",
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity, // 10초
    gcTime: 1000 * 60 * 60, // 1시간
  });
}
