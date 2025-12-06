import { Children } from "react";
import { SecondaryOutlineButton } from "../../../../shared/ui/button/SecondaryButton";

export function PostCreateButton(props) {
  const postCreateButtonProps = {
    ...props,
    shape: "square",
    style: { position: "fixed", left: "50%", bottom: "40px" },
  };

  return <SecondaryOutlineButton {...postCreateButtonProps} />;
}
