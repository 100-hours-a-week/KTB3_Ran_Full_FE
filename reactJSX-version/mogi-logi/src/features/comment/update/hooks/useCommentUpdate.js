import { Endpoint } from "../../../../shared/api/endpoint";
import { useApi } from "../../../../shared/api/useApi";
import { CommentUpdateDto } from "../../delete/model/CommentUpdateDto.js";

export function useCommentUpdate() {
  const { requestApi } = useApi();
  //data :content
  const handleCommentUpdate = async (data) => {
    try {
      /*dto*/
      const dto = CommentUpdateDto(data);
      const res = await requestApi(
        Endpoint.COMMENT.UPDATE({
          postId: data.postId,
          commentId: data.commentId,
        }),
        "PATCH",
        dto,
      );
      if (!res) {
        throw new Error("data가 반환되지 않았습니다.");
      }
      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
    }
  };
  return { handleCommentUpdate };
}
