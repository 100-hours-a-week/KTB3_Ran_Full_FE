import { PrimaryButton } from "../../../shared/ui/button/PrimaryButton";

export function LoginButton(props) {
  const login = () => {
    console.log("로그인");
  };
  const loginButtonProps = {
    ...props,
    onClick: login,
  };
  return <PrimaryButton {...loginButtonProps} />;
}
