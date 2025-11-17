import handleLikeCreat from "../../../pages/like/lib/handleLikeCreat.js";
import handleLikeDelete from "../../../pages/like/lib/handleLikeDelete.js";

function likeCreateDeleteTogle({ container, props }) {
  if (props.liked) {
    container.classList.add("enabled");
    container.addEventListener("click", () => handleLikeDelete(props.postId));
  } else {
    container.classList.remove("enabled");
    container.addEventListener("click", () => handleLikeCreat(props.postId));
  }
}

export default likeCreateDeleteTogle;
