import { InputField } from "../../../../shared/ui/input-field/InputField";
import { Logo } from "../../../../shared/ui/logo/Logo";

export function SignupPage() {
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
            value={""}
            helperText={""}
          />

          {/* 비밀번호 */}
          <InputField
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={""}
            helperText={""}
          />

          {/* 비밀번호 확인 */}
          <InputField
            id="passwordConfirm"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 재입력하세요"
            value={""}
            helperText={""}
          />

          {/* 닉네임 */}
          <InputField
            id="username"
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력하세요"
            value={""}
            helperText={""}
          />
        </div>

        {/* 하단 네비게이션 */}
        <div className="nav-btn-wrapper">
          <div className="nav-des">회원 정보가 있나요?</div>
        </div>
      </div>
    </div>
  );
}
