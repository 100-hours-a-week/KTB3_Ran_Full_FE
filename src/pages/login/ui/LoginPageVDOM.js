import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import setState from "../../../shared/state/currentState.js";
import h from "../../../shared/DOMutil/virtualDOM.js";
import { InputField } from "../../../shared/ui/InputField/InputField.js";
import SignupButtonVDOM from "../../../features/navigation/SignupButtonVDOM/SignupButtonVDOM.js";
import { loginBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

export default function LoginPageVDOM(state) {
  //헐 설마 return 에 두는게 react도 같은 이유로 return 에 두는건가?

  return h(
    "div",
    { className: "login-page" },
    h(
      "div",
      { className: "auth-container" },
      h("img", { className: "logo", src: "public/logo.svg" }),
      h(
        "div",
        { className: "desc" },
        "새로운 지식은",
        h("span", null, "한 줄"),
        "에서 시작됩니다."
      ),
      h(
        "div",
        { className: "auth-container-wrapper" },
        InputField({
          label: "이메일",
          value: state.email,
          placeholder: "",
          helperText: state.emailError,
          type: "text",
          onInput: (e) => {
            const value = e.target.value;
            setState({
              email: value,
              emailError: validateEmail(value),
            });
          },
          onBlur: (e) => {
            const value = e.target.value;
            setState({
              emailError: validateEmail(value),
            });
          },
        }),
        InputField({
          label: "비밀번호",
          type: "password",
          value: state.password,
          helperText: state.passwordError,
          onInput: (e) => {
            const value = e.target.value;
            setState({
              password: value,
              passwordError: validatePassword(value),
            });
          },
          onBlur: (e) => {
            const value = e.target.value;
            setState({
              passwordError: validatePassword(value),
            });
          },
        }),
        loginBtn()
      ),
      h("div", { className: "nav-btn-wrapper" }, [
        h("div", { className: "nav-des" }, "당신의 한 줄을 기록해보세요."),
        SignupButtonVDOM(),
      ])
    )
  );
}
