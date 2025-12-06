import { Endpoint } from "../../../../shared/api/endpoint";
import { useApi } from "../../../../shared/api/useApi";
import { PostUpdateDto } from "../model/PostUpdateDto.js";

//postId가 들어와야함
export function usePostUpdate() {
  const { requestApi } = useApi();
  //data :content
  const handlePostUpdate = async (data, postId) => {
    try {
      /*dto*/
      console.log(data);
      const dto = PostUpdateDto(data);
      const res = await requestApi(Endpoint.POST.UPDATE(postId), "PATCH", dto);
      if (!res) {
        throw new Error("data가 반환되지 않았습니다.");
      }
      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
    }
  };
  return { handlePostUpdate };
}
