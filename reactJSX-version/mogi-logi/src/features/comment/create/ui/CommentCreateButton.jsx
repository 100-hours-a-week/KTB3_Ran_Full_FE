import { SecondaryButton } from "@/shared";

export function CommentCreateButton(props) {
  const { postId, commentId, ...buttonProps } = props;
  return <SecondaryButton {...buttonProps} />;
}
