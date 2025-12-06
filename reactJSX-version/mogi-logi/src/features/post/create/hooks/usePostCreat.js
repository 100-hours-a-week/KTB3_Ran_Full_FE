import { Endpoint } from "../../../../shared/api/endpoint";
import { useApi } from "../../../../shared/api/useApi";
import { PostCreatDto } from "../model/PostCreatDto";

export function usePostCreat() {
  const { requestApi } = useApi();
  const handlePostCreat = async (data) => {
    try {
      const dto = PostCreatDto(data);
      const res = await requestApi(Endpoint.POST.POST, "POST", dto);
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
