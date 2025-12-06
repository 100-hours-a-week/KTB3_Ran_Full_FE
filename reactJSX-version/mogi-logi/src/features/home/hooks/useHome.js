import { Endpoint } from "../../../shared/api/base/endpoint";
import { useApi } from "../../../shared/api/base/useApi";

export function useHome() {
  const { requestApi } = useApi();
  const handleUseHome = (page) => {
    try {
      //무한 스크롤 api url
      const res = requestApi(
        `${Endpoint.POST.GET}?page=${page}&size=10`,
        "GET",
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
  return { handleUseHome };
}
