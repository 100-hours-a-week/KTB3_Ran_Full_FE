import { Endpoint, postMutation } from "@/shared";

export const usePostDelete = postMutation({
  urlFn: (postId) => Endpoint.POST.DELETE(postId),
  method: "DELETE",
  invalidates: [["posts"]],
  successMessage: "게시글 삭제 완료",
  redirectTo: "/home",
});
