import { useInfiniteQuery } from "@tanstack/react-query";
import { Endpoint } from "../../../shared/api/endpoint.js";
import apiFetch from "../../../shared/api/apiFetch.js";

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
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    gcTime: Infinity,
    staleTime: Infinity,
  });
}
