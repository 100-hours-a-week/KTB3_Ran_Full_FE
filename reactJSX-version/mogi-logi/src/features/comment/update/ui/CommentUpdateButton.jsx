import { SecondaryOutlineButton } from "@/shared";

export function CommentUpdateButton(props) {
  const { postId, commentId, ...buttonProps } = props;
  return <SecondaryOutlineButton {...buttonProps} />;
}
