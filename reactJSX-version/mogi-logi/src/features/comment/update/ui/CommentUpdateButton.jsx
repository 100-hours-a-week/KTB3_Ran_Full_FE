import { SecondaryButton } from "../../../../shared/ui/button/SecondaryButton.jsx";

export function CommentUpdateButton(props) {
  const CommentUpdateProps = {
    ...props,
  };
  return <SecondaryButton {...CommentUpdateProps} />;
}
