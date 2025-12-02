import { SecondaryButton } from "../../../../shared/ui/button/SecondaryButton";

export function CommentCreateButton(props) {
  const commentCreat = () => {
    console.log("댓글 등록");
  };

  const CommentCreateProps = {
    ...props,
    onClick: commentCreat,
  };
  return <SecondaryButton {...CommentCreateProps} />;
}
