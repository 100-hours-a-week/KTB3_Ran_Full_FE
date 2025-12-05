import { SecondaryButton } from "../../../../shared/ui/button/SecondaryButton";

export function CommentUpdateButton(props) {
  const CommentUpdateProps = {
    ...props,
  };
  return <SecondaryButton {...CommentUpdateProps} />;
}
