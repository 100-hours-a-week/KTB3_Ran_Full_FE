interface LoginPageProps {
  state: string;
}

export function LoginPage({ state }: LoginPageProps) {
  return (
    <div className="login-page">
      <div className="auth-container">
        <div className="gap" />

        <div className="desc">로그인 페이지</div>

        <div className="auth-container-wrapper"></div>
      </div>
    </div>
  );
}
