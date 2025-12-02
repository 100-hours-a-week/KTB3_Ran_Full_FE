import BaseButton from "./BaseButton";

export function SecondaryButton(props) {
  return <BaseButton variant="secondary-filled" {...props} />;
}

export function SecondaryOutlineButton(props) {
  return <BaseButton variant="secondary-outline" {...props} />;
}
