import { useNavigate } from "react-router-dom";
import { Endpoint } from "../../../shared/api/base/endpoint";
import { loginDto } from "../model/authDto";
import { useMutation } from "@tanstack/react-query";
import apiFetch from "../../../shared/api/base/apiFetch.js";

//hooks
export function useLogin() {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (form) => {
      //1. dto
      const dto = loginDto(form);

      //2. 데이터 요청
      const res = await apiFetch(Endpoint.USER.LOGIN, "POST", dto);
      console.log(res);

      if (!res.status) throw new Error(res.error || "로그인 실패");

      return res.data;
    },

    //로그인 성공 시
    onSuccess: (data) => {
      sessionStorage.setItem("accessToken", data.accessToken);
      sessionStorage.setItem("refreshToken", data.refreshToken);

      console.log("로그인 성공:", data);
      navigate("/home");
    },

    //로그인 실패 시
    // 로그인 실패 시
    onError: (error) => {
      console.error("로그인 오류:", error);
      alert("로그인에 실패했습니다.");
    },
  });

  return {
    login: loginMutation.mutate, //즉시 실행
    loginAsync: loginMutation.mutateAsync, // async/await 버전
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
}
