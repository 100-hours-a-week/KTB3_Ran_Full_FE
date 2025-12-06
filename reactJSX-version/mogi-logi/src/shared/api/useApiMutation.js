import { useMutation } from "@tanstack/react-query";
import apiFetch from "./apiFetch";
import { useToast } from "../ui/toast/useToast";

export function useApiMutation({ url, dtoFn, onSuccess }) {
  const { addToast } = useToast();

  return useMutation({
    mutationFn: async (form) => {
      const dto = dtoFn(form);
      const res = await apiFetch(url, "POST", dto);

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
