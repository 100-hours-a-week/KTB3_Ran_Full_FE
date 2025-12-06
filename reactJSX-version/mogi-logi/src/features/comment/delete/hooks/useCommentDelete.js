import { Endpoint } from "../../../../shared/api/endpoint";
import { useApi } from "../../../../shared/api/useApi";

export function useCommentDelete() {
  const { requestApi } = useApi();
  //data :content
  const handleCommentDelete = async (data) => {
    try {
      /*dto*/
      console.log(data);
      const res = await requestApi(
        Endpoint.COMMENT.DELETE({
          postId: data.postId,
          commentId: data.commentId,
        }),
        "DELETE",
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
  return { handleCommentDelete };
}
