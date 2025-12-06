import { Endpoint } from "../../../../shared/api/base/endpoint";
import { useApi } from "../../../../shared/api/base/useApi";

export function usePostDetail() {
  const { requestApi } = useApi();
  const handlePostDetail = async (data) => {
    try {
      const dto = data;

      const res = await requestApi(Endpoint.POST.DETAIL(dto), "GET");
      if (!res) {
        throw new Error("data가 반환되지 않았습니다.");
      }

      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
    }
  };
  return { handlePostDetail };
}
