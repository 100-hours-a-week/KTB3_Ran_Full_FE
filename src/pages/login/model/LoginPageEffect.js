import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import { navigateTo } from "../../../shared/router/Router.js";
import setState, { getState } from "../../../shared/state/currentState.js";
import handleLoginClick from "../lib/handleLoginClick.js";

export default function loginEffects() {
  console.log("loginEffects 등록됨");

  function onBlur(e) {
    if (!document.querySelector(".login-page")) return;

    const { id, value } = e.target;
    const state = getState();

    if (id === "email") {
      setState({
        email: value,
        emailError: validateEmail(value),
        canSubmit: !validateEmail(value) && !validatePassword(state.password),
      });
    }

    if (id === "password") {
      setState({
        password: value,
        passwordError: validatePassword(value),
        canSubmit: !validateEmail(state.email) && !validatePassword(value),
      });
    }
  }

  document.addEventListener("blur", onBlur, true);

  document.addEventListener("click", (e) => {
    if (e.target.id === "signup-nav-button") {
      console.log("회원가입 버튼 클릭됨");
      location.hash = "/signup";
      navigateTo("/signup");
    }
  });
  document.addEventListener("click", handleLoginClick);

  return () => {
    //라이프 사이클과 같이 등록 후 해제가 꼭 필요함.
    document.removeEventListener("blur", onBlur, true);
    document.removeEventListener("click", onclick);
    document.removeEventListener("click", handleLoginClick);
  };
}
