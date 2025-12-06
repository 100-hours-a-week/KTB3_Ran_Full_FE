import { Endpoint } from "../../../../shared/api/base/endpoint";
import { useApi } from "../../../../shared/api/base/useApi";

//postId가 들어와야함
export function usePostDelete() {
  const { requestApi } = useApi();
  //data :content
  const handlePostDelete = async (data) => {
    try {
      /*dto*/
      console.log(data);
      const res = await requestApi(Endpoint.POST.DELETE(data.postId), "DELETE");
      if (!res) {
        throw new Error("data가 반환되지 않았습니다.");
      }
      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
    }
  };
  return { handlePostDelete };
}
