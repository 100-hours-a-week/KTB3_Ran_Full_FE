import { Endpoint } from "../../../../shared/api/base/endpoint";
import { useApi } from "../../../../shared/api/base/useApi";

export function useLikeCreat() {
  const { requestApi } = useApi();
  //data :content
  const handleLikeCreat = async (data) => {
    try {
      /*dto*/
      console.log(data);
      const res = await requestApi(Endpoint.LIKE.POST(data.postId), "POST");
      if (!res) {
        throw new Error("data가 반환되지 않았습니다.");
      }
      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
    }
  };
  return { handleLikeCreat };
}
