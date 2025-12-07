import { useApiMutation } from "@/shared";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/shared";
import { useNavigate } from "react-router-dom";

export function postMutation({
  urlFn,
  method,
  dtoFn = null,
  invalidates = [],
  successMessage,
  redirectTo,
}) {
  return function usePostMutation(postId) {
    const queryClient = useQueryClient();
    const { addToast } = useToast();
    const navigate = useNavigate();

    const mutation = useApiMutation({
      url: () => urlFn(postId),
      method,
      dtoFn,
      onSuccess: () => {
        invalidates.forEach((key) => {
          if (Array.isArray(key)) {
            queryClient.invalidateQueries(key);
          } else {
            queryClient.invalidateQueries([key]);
          }
        });

        successMessage && addToast(successMessage);

        if (redirectTo) {
          navigate(
            typeof redirectTo === "function" ? redirectTo(postId) : redirectTo,
          );
        }
      },
    });

    return {
      mutate: mutation.mutate,
      isLoading: mutation.isPending,
    };
  };
}
