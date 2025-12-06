import { SecondaryOutlineButton } from "../../../../shared/ui/button/SecondaryButton.jsx";

export function CommentUpdateButton(props) {
  const CommentUpdateProps = {
    ...props,
  };
  return <SecondaryOutlineButton {...CommentUpdateProps} />;
}
