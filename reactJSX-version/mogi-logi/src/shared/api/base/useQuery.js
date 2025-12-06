import { useQuery } from "@tanstack/react-query";

export function useQuery(key, fetcher, options) {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const res = await fetcher();
      return res;
    },
    staleTime: 1000 * 60 * 5, //5분 캐싱
    retry: 1, //재시도
    refetchOnWindowFocus: false,
    ...options,
  });
}
