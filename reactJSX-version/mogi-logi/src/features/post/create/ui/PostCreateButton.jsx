import { Children } from "react";
import { SecondaryOutlineButton } from "../../../../shared/ui/button/SecondaryButton";

export function PostCreateButton(props) {
  const postCreat = () => {
    console.log("로그인");
  };
  const postCreateButtonProps = {
    ...props,
    onClick: postCreat,
    children: "게시글 등록",
    shape: "square",
    style: { position: "fixed", left: "50%", bottom: "40px" },
  };
  return <SecondaryOutlineButton {...postCreateButtonProps} />;
}
