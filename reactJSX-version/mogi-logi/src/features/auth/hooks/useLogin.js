import { useNavigate } from "react-router-dom";
import { Endpoint } from "../../../shared/api/base/endpoint";
import { useApi } from "../../../shared/api/base/useApi";
import { loginDto } from "../model/authDto";

//hooks
export function useLogin() {
  const { requestApi } = useApi();
  const navigator = useNavigate();

  const handleLogin = async (data) => {
    try {
      //1. dto 가공
      const dto = loginDto(data);
      const res = await requestApi(Endpoint.USER.LOGIN, "POST", dto);

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
