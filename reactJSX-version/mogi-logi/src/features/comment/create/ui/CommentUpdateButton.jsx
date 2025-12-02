import { SecondaryButton } from "../../../../shared/ui/button/SecondaryButton";

export function CommentUpdateButton(props) {
  const commentUpdate = () => {
    console.log("댓글 등록");
  };

  const CommentUpdateProps = {
    ...props,
    onClick: commentUpdate,
  };
  return <SecondaryButton {...CommentUpdateProps} />;
}
