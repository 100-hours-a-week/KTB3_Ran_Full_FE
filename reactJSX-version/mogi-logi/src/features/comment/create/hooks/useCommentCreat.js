import { Endpoint } from "../../../../shared/api/endpoint";
import { useApi } from "../../../../shared/api/useApi";
import { CommentCreatDto } from "../model/commentCreatDto";

//postId가 들어와야함
export function useCommentCreat() {
  const { requestApi } = useApi();
  //data :content
  const handleCommentCreat = async (data) => {
    try {
      /*dto*/
      console.log(data);
      const dto = CommentCreatDto(data);
      const res = await requestApi(
        Endpoint.COMMENT.POST(data.postId),
        "POST",
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
  return { handleCommentCreat };
}
