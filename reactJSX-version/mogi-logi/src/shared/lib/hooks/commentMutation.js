import { useApiMutation } from "@/shared";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/shared";

export function commentMutation({ urlFn, method, dtoFn, successMessage }) {
  return function useCommentMutation(postId) {
    const queryClient = useQueryClient();
    const { addToast } = useToast();

    const mutation = useApiMutation({
      url: (form) => urlFn(form, postId),
      method,
      dtoFn,
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", postId]);
        successMessage && addToast(successMessage);
      },
    });

    return {
      mutate: mutation.mutate,
      isLoading: mutation.isPending,
    };
  };
}
