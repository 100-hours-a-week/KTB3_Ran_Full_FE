import { useNavigate } from "react-router-dom";
import { Endpoint } from "../../../shared/api/base/endpoint";
import { useApi } from "../../../shared/api/base/useApi";

//hooks
export function useLogin() {
  const { requestApi } = useApi();
  const navigator = useNavigate();

  const handleLogin = async (data) => {
    try {
      const res = await requestApi(Endpoint.USER.LOGIN, "POST", data);

      console.log(res);
      if (res) {
        console.log("login page move");
        navigator("/home");
      }

      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return { handleLogin };
}
