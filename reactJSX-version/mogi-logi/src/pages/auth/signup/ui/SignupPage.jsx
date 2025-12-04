import { useSignup } from "../../../../features/auth/hooks/useSignup";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../../../features/auth/lib/validater";
import { SignupButton } from "../../../../features/auth/ui/SignupButton";
import { useInput } from "../../../../shared/hooks/useInput";
import { InputField } from "../../../../shared/ui/input-field/InputField";
import { Logo } from "../../../../shared/ui/logo/Logo";

export function SignupPage() {
  const email = useInput("", validateEmail);
  const password = useInput("", validatePassword);
  const confirmPassword = useInput("");
  const username = useInput("", validateUsername);

  const confirmPasswordError = validateConfirmPassword({
    password: password.value,
    confirmPassword: confirmPassword.value,
  });

  const canSubmit =
    !email.error && !password.error && !confirmPasswordError && !username.error;
  const { handleSignup } = useSignup();

  const onSubmit = () => {
    if (!canSubmit) console.log("회원가입의 유효성이 통과되지 않았습니다.");
    handleSignup({
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      username: username.value,
    });
  };

  return (
    <div className="signup-page">
      <div className="auth-container">
        <div className="gap" />
        <div>
          <Logo width={200} />
          <div className="desc">회원가입 페이지</div>
        </div>

        <div className="auth-container-wrapper">
          {/* 이메일 */}
          <InputField
            id="email"
            label="이메일"
            type="text"
            placeholder="이메일을 입력하세요"
            value={email}
            helperText={email.error}
            {...email.bind}
          />

          {/* 비밀번호 */}
          <InputField
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
            helperText={password.error}
            {...password.bind}
          />

          {/* 비밀번호 확인 */}
          <InputField
            id="passwordConfirm"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 재입력하세요"
            value={confirmPassword.value}
            helperText={confirmPasswordError}
            {...confirmPassword.bind}
          />

          {/* 닉네임 */}
          <InputField
            id="username"
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력하세요"
            helperText={username.error}
            {...username.bind}
          />
        </div>
        <SignupButton
          disabled={!canSubmit}
          children={"로그인"}
          color={"primary"}
          shape={"rounded"}
          fullWidth={true}
          onClick={onSubmit}
        />

        {/* 하단 네비게이션 */}
        <div className="nav-btn-wrapper">
          <div className="nav-des">회원 정보가 있나요?</div>
        </div>
      </div>
    </div>
  );
}
