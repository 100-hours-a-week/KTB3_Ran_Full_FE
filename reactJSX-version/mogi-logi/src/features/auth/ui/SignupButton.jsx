import { PrimaryButton } from "../../../shared/ui/button/PrimaryButton";

export function SignupButton(props) {
  const signup = () => {
    console.log("회원가입 버튼 클릭");
  };

  const SignupButtonProps = {
    ...props,
    onClick: signup,
  };
  return <PrimaryButton {...SignupButtonProps} />;
}
