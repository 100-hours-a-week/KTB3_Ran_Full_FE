import { InputField } from "../../../../shared/ui/input-field/InputField";
import "../../style/auth.css";
import { Logo } from "../../../../shared/ui/logo/Logo";
import { useInput } from "../../../../shared/hooks/useInput";
import {
  LoginButton,
  useLogin,
  validateEmail,
  validatePassword,
} from "@/features/auth";

//로그인 및 회원가입 구현시 form 사용하기!!

export function LoginPage() {
  const email = useInput("", validateEmail);
  const password = useInput("", validatePassword);

  //둘의 error가 아무것도 없을때만
  const canSubmit =
    email.value.length > 0 &&
    password.value.length > 0 &&
    !email.error &&
    !password.error;

  console.log(canSubmit);
  const { login } = useLogin();

  //제출
  const onSubmit = () => {
    console.log(email, password);
    if (!canSubmit) return;
    login({ email: email.value, password: password.value });
  };

  return (
    <div className="login-page">
      <div className="auth-container">
        <div className="gap" />
        <div>
          <Logo width={200} />
          <div className="desc">로그인 페이지</div>
        </div>
        <InputField
          id="email"
          label="이메일"
          value={email.value}
          placeholder="이메일을 입력하세요"
          helperText={email.error}
          {...email.bind}
        />
        <InputField
          id="password"
          label="비밀번호"
          type="password"
          value={password.value}
          placeholder="비밀번호를 입력하세요"
          helperText={password.error}
          {...password.bind}
        />
        <LoginButton
          disabled={!canSubmit}
          children={"로그인"}
          color={"primary"}
          shape={"rounded"}
          fullWidth={true}
          onClick={onSubmit}
        />

        <div className="auth-container-wrapper"></div>
      </div>
    </div>
  );
}
