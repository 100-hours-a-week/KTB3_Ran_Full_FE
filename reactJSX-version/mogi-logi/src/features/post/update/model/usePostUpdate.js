import { Endpoint, postMutation } from "@/shared";
import { PostUpdateDto } from "./PostUpdateDto";

export const usePostUpdate = postMutation({
  urlFn: (postId) => Endpoint.POST.UPDATE(postId),
  method: "PATCH",
  dtoFn: PostUpdateDto,
  invalidates: [
    ["posts"], // 전체 목록 리프레시
    ["post", (postId) => postId], // 단일 포스트 캐시 리프레시
  ],
  successMessage: "게시글 수정 성공",
  redirectTo: (postId) => `/post/get/${postId}`,
});
