import { useQuery } from "@tanstack/react-query";
import apiFetch from "./apiFetch.js";

export function useApiQuery({ queryKey, url, enabled = true, select }) {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const res = await apiFetch(url, "GET");

      if (!res.status) throw new Error(res.error || "요청 실패");

      return res.data;
    },
    enabled,
    select,
    staleTime: 1000 * 30,
  });
}
