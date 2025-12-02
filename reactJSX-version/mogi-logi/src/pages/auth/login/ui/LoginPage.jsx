import { useState } from "react";
import { InputField } from "../../../../shared/ui/input-field/InputField";
import "../../style/auth.css";
import { Logo } from "../../../../shared/ui/logo/Logo";

//로그인 및 회원가입 구현시 form 사용하기!!

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          value={email}
          placeholder="이메일을 입력하세요"
          helperText=""
          onChange={setEmail}
        />
        <InputField
          id="password"
          label="비밀번호"
          value={password}
          placeholder="비밀번호를 입력하세요"
          helperText=""
          onChange={setPassword}
        />

        <div className="auth-container-wrapper"></div>
      </div>
    </div>
  );
}
