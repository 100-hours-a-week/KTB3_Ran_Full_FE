import handleLikeCreat from "../../../pages/like/lib/handleLikeCreat.js";
import handleLikeDelete from "../../../pages/like/lib/handleLikeDelete.js";

// function likeCreateDeleteTogle({ container, props }) {
//   if (props.liked) {
//     container.classList.add("enabled");
//     container.addEventListener("click", () => handleLikeDelete(props.postId));
//   } else {
//     container.classList.remove("enabled");
//     container.addEventListener("click", () => handleLikeCreat(props.postId));
//   }
// }

function likeCreateDeleteTogle(postId) {
  const state = getState();

  const updatedPosts = state.posts.map((post) => post.id === postId);
}

export default likeCreateDeleteTogle;
