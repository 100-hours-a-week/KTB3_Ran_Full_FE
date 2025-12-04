import { Endpoint } from "../../../shared/api/base/endpoint";
import { useApi } from "../../../shared/api/base/useApi";
import { signupDto } from "../model/authDto";

export function useSignup() {
  const { requestApi } = useApi();

  const handleSignup = async (data) => {
    try {
      //1.dto 가공
      const dto = signupDto(data);
      const res = await requestApi(Endpoint.USER.SIGNUP, "POST", dto);
      if (!res) {
        throw new Error("data가 반환되지 않았습니다.");
      }
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  return { handleSignup };
}
