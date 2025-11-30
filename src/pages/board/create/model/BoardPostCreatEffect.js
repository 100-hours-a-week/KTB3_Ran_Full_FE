import { getState } from "../../../../shared/state/currentState.js";
import handlePostCreat from "../../../../features/board/model/handlePostCreat.js";

export default function BoardPostCreatEffect() {
  const createButton = document
    .getElementById("post-create-button")
    .querySelector("button");

  if (!createButton) return;

  const onClick = async () => {
    const state = getState();
    await handlePostCreat();
  };

  createButton.addEventListener("click", onClick);

  return () => {
    createButton.removeEventListener("click", onClick);
  };
}
