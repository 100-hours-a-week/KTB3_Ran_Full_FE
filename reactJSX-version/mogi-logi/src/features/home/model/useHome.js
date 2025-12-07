import { Endpoint } from "../../../shared/api/endpoint.js";
import { useApi } from "../../../shared/api/useApi.js";

export function useHome() {
  const { requestApi } = useApi();
  const handleUseHome = async (cursor = null, size = 10) => {
    try {
      //무한 스크롤 api url
      const query = cursor
        ? `?cursor = ${cursor}&size=${size}`
        : `?size=${size}`;
      const res = await requestApi(`${Endpoint.POST.GET}${query}`, "GET");
      if (!res) throw new Error("API 응답이 없습니다");
      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
    }
  };
  return { handleUseHome };
}
