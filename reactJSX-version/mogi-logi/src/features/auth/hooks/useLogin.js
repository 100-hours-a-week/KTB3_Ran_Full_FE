import { Endpoint } from "../../../shared/api/base/endpoint";
import { useApi } from "./useApi";

//hooks
export function useLogin() {
  const { requestApi } = useApi();

  const handleLogin = async (data) => {
    try {
      const res = await requestApi(Endpoint.USER.LOGIN, "POST", data);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return { handleLogin };
}
