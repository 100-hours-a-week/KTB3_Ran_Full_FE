import validateConfirmPassword from "../../../features/auth/lib/confirmPassword.js";
import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import validateUsername from "../../../features/auth/lib/validateUsername.js";
import LoginButton from "../../../features/navigation/LoginButton.js";
import h from "../../../shared/DOMutil/virtualDOM.js";
import setState from "../../../shared/state/currentState.js";
import { signupBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";
import { InputField } from "../../../shared/ui/InputField/InputField.js";

function SignupPageVDOM(state) {
  const confirmProps = {
    password: state.password,
    confirmPassword: state.passwordConfirm,
  };

  const isValid =
    !validateEmail(state.email) &&
    !validatePassword(state.password) &&
    !validateConfirmPassword(confirmProps) &&
    !validateUsername(state.username);

  return h("div", { className: "signup-page" }, [
    h("div", { className: "gap" }),

    h("div", { className: "auth-container" }, [
      h("div", { className: "desc" }, [
        "당신의 첫 번째 한 줄을 ",
        h("br"),
        h("span", null, "기록할 준비"),
        "가 되셨나요?",
      ]),

      h("div", { className: "auth-container-wrapper" }, [
        // 이메일
        InputField({
          label: "이메일",
          type: "text",
          value: state.email,
          helperText: state.emailError,
          onInput: (e) => {
            const v = e.target.value;
            setState({
              email: v,
              emailError: validateEmail(v),
            });
          },
          onBlur: (e) => {
            const v = e.target.value;
            setState({
              emailError: validateEmail(v),
            });
          },
        }),

        // 비밀번호
        InputField({
          label: "비밀번호",
          type: "password",
          value: state.password,
          helperText: state.passwordError,
          onInput: (e) => {
            const v = e.target.value;
            setState({
              password: v,
              passwordError: validatePassword(v),
            });
          },
          onBlur: (e) => {
            const v = e.target.value;
            setState({
              passwordError: validatePassword(v),
            });
          },
        }),

        // 비밀번호 확인
        InputField({
          label: "비밀번호 확인",
          type: "password",
          value: state.passwordConfirm,
          helperText: state.passwordConfirmError,
          onInput: (e) => {
            const v = e.target.value;

            setState({
              passwordConfirm: v,
              passwordConfirmError: validateConfirmPassword({
                password: state.password,
                confirmPassword: v,
              }),
            });
          },
          onBlur: (e) => {
            const v = e.target.value;

            setState({
              passwordConfirmError: validateConfirmPassword({
                password: state.password,
                confirmPassword: v,
              }),
            });
          },
        }),

        // 닉네임
        InputField({
          label: "닉네임",
          type: "text",
          value: state.username,
          helperText: state.usernameError,
          onInput: (e) => {
            const v = e.target.value;
            setState({
              username: v,
              usernameError: validateUsername(v),
            });
          },
          onBlur: (e) => {
            const v = e.target.value;
            setState({
              usernameError: validateUsername(v),
            });
          },
        }),

        // 회원가입 버튼
        h(
          "div",
          { className: "wrapper" },
          signupBtn({
            disabled: !isValid,
            className: isValid ? "" : "disabled",
          })
        ),
      ]),

      // 하단 네비게이션
      h("div", { className: "nav-btn-wrapper" }, [
        h("div", { className: "nav-des" }, "회원 정보가 있나요?"),
        LoginButton(),
      ]),
    ]),
  ]);
}

export default SignupPageVDOM;
