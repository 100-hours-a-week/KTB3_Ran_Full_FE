import { Endpoint } from "../../../shared/api/base/endpoint";
import { useApi } from "../../../shared/api/base/useApi";
import { signupDto } from "../model/authDto";

export function useSignup() {
  const { responseApi } = useApi();

  const handleSignup = async (data) => {
    try {
      //1.dto 가공
      const dto = signupDto(data);
      const res = await responseApi(Endpoint.USER.SIGNUP, "POST", dto);

      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  return { handleSignup };
}
