import h from "../../../shared/DOMutil/virtualDOM.js";

function LoginButtonVDOM() {
  return h(
    "button",
    {
      id: "login-nav-button",
      className: "loginBtn",
    },
    "로그인 하러 가기"
  );
}

export default LoginButtonVDOM;
