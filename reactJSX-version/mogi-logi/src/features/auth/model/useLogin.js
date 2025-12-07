import { useNavigate } from "react-router-dom";
import { Endpoint } from "../../../shared/api/endpoint.js";
import { loginDto } from "./authDto.js";
import { useApiMutation } from "../../../shared/api/useApiMutation.js";

//hooks
export function useLogin() {
  const navigate = useNavigate();

  const loginMutation = useApiMutation({
    url: Endpoint.USER.LOGIN,
    method: "POST",
    dtoFn: loginDto,
    onSuccess: (data) => {
      sessionStorage.setItem("accessToken", data.accessToken);
      sessionStorage.setItem("refreshToken", data.refreshToken);
      console.log("성공");
      navigate("/home");
    },
  });

  return {
    login: loginMutation.mutate, //즉시 실행
    loginAsync: loginMutation.mutateAsync, // async/await 버전
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
}
