import { PrimaryButton } from "../../../shared/ui/button/PrimaryButton";

export function LoginButton(props) {
  const loginButtonProps = {
    ...props,
  };
  return <PrimaryButton {...loginButtonProps} />;
}
