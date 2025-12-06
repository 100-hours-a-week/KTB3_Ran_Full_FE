import { useNavigate } from "react-router-dom";
import { Endpoint } from "../../../shared/api/endpoint";
import { loginDto } from "../model/authDto";
import { useMutation } from "@tanstack/react-query";
import apiFetch from "../../../shared/api/apiFetch.js";

//hooks
export function useLogin() {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    url: Endpoint.USER.LOGIN,
    dtoFn: loginDto,
    onSuccess: (data) => {
      sessionStorage.setItem("accessToken", data.accessToken);
      sessionStorage.setItem("refreshToken", data.refreshToken);
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
