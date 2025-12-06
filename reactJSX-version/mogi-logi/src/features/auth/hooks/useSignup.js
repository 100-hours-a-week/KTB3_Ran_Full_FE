import { Endpoint } from "../../../shared/api/base/endpoint";
import { signupDto } from "../model/authDto";
import { useMutation } from "@tanstack/react-query";
import apiFetch from "../../../shared/api/base/apiFetch.js";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../shared/ui/toast/useToast.jsx";

export function useSignup() {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const signupMutation = useMutation({
    mutationFn: async (form) => {
      //1. dto
      const dto = signupDto(form);

      //2. 데이터 요청
      const res = await apiFetch(Endpoint.USER.SIGNUP, "POST", dto);
      console.log("응답 데이터:", res);

      if (!res.status) throw new Error(res.error || "회원가입 실패");

      return res.data; //data
    },

    //로그인 성공 시
    onSuccess: (data) => {
      console.log("회원 가입 성공:", data);
      navigate("/login");
      addToast("회원 가입 성공");
    },

    //로그인 실패 시
    onError: (error) => {
      console.error("회원 가입 오류:", error);
      alert("회원가입에 실패했습니다.");
    },
  });

  return {
    signup: signupMutation.mutate, //즉시 실행
    isLoading: signupMutation.isPending,
    error: signupMutation.error,
  };
}
