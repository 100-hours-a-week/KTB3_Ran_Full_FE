import { PrimaryButton } from "../../../shared/ui/button/PrimaryButton";

export function SignupButton(props) {
  const SignupButtonProps = {
    ...props,
  };
  return <PrimaryButton {...SignupButtonProps} />;
}
