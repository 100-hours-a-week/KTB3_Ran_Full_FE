import h from "../../../shared/DOMutil/virtualDOM.js";

function SignupButtonVDOM() {
  return h(
    "button",
    { id: "signup-nav-button", className: "signup-btn" },
    "가입하기"
  );
}

export default SignupButtonVDOM;
