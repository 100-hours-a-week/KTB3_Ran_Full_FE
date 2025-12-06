import { useNavigate } from "react-router-dom";
import { IconCircleButton } from "../../../../shared/ui/button/IconCircleButton";
import { Icon } from "../../../../shared/ui/icons/Icon";

export function PostCreateNavButton() {
  const navigate = useNavigate();

  const onclick = () => {
    navigate("/post/create");
  };
  return (
    <IconCircleButton
      className="post-create-icon-button"
      iconOnly={true}
      children={<Icon size={30} name={"boardCreat"} />}
      color={"primary"}
      onClick={onclick}
    />
  );
}
