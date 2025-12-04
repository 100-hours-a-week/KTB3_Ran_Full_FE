import { Endpoint } from "../../../../shared/api/base/endpoint";
import { useApi } from "../../../../shared/api/base/useApi";
import { CommentCreatDto } from "../model/commentCreatDto";
import { PostCreatDto } from "../model/PostCreatDto";

export function usePostCreat() {
  const { requestApi } = useApi();
  const handlePostCreat = async (data) => {
    try {
      const dto = CommentCreatDto(data);
      const res = await requestApi(Endpoint.COMMENT.POST(dto), "POST", dto);
      if (!res) {
        throw new Error("data가 반환되지 않았습니다.");
      }
      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
    }
  };
  return { handlePostCreat };
}
