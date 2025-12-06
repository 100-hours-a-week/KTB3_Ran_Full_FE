import { Endpoint } from "../../../shared/api/endpoint";
import { signupDto } from "../model/authDto";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../shared/ui/toast/useToast.jsx";

export function useSignup() {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const signupMutation = useMutation({
    url: Endpoint.USER.SIGNUP,
    dtoFn: signupDto,
    onSuccess: () => {
      addToast("회원가입 성공");
      navigate("/login");
      console.log("회원가입 성공");
    },
  });

  return {
    signup: signupMutation.mutate, //즉시 실행
    isLoading: signupMutation.isPending,
  };
}
