import { Endpoint } from "../../../shared/api/endpoint.js";
import { signupDto } from "./authDto.js";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../shared/ui/toast/useToast.jsx";
import { useApiMutation } from "../../../shared/api/useApiMutation.js";

export function useSignup() {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const signupMutation = useApiMutation({
    url: Endpoint.USER.SIGNUP,
    method: "POST",
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
