import { Endpoint } from "../../../shared/api/base/endpoint";
import { useApi } from "../../../shared/api/base/useApi";

export function useHome() {
  const { requestApi } = useApi();
  const handleUseHome = () => {
    try {
      const res = requestApi(Endpoint.POST.GET, "GET");
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
