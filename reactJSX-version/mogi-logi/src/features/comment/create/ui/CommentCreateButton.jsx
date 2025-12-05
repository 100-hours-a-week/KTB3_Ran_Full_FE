import { SecondaryButton } from "../../../../shared/ui/button/SecondaryButton";

export function CommentCreateButton(props) {
  console.log(props);
  const CommentCreateProps = {
    ...props,
  };
  return <SecondaryButton {...CommentCreateProps} />;
}
