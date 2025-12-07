import { useMutation } from "@tanstack/react-query";
import apiFetch from "../base/apiFetch.js";
import { useToast } from "../../ui/toast/useToast.jsx";

export function useApiMutation({ url, dtoFn, method, onSuccess }) {
  const { addToast } = useToast();

  return useMutation({
    mutationFn: async (form) => {
      let dto = dtoFn ? dtoFn(form) : undefined;

      if (method !== "DELETE" && dtoFn) {
        dto = dtoFn(form);
      }

      const apiUrl = typeof url === "function" ? url(form) : url;

      const res = await apiFetch(apiUrl, method, dto);

      if (!res.status) throw new Error(res.error || "요청 실패");

      return res.data;
    },

    onSuccess: (data) => {
      if (onSuccess) onSuccess(data);
    },

    onError: (err) => {
      console.error(err);
      addToast("요청에 실패했습니다.");
    },
  });
}
