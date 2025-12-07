import { Endpoint, postMutation } from "@/shared";
import { PostCreatDto } from "./PostCreatDto";

export const usePostCreat = postMutation({
  urlFn: () => Endpoint.POST.POST,
  method: "POST",
  dtoFn: PostCreatDto,
  invalidates: [["posts"]],
  successMessage: "게시글 생성 성공",
  redirectTo: "/home",
});
