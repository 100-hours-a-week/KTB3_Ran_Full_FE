import post from "../../features/board/api/postHomeFetch.js";
import commentUpdateFetch from "../../features/comment/api/commentUpdateFetch.js";
import { creatCommentDto } from "../../features/comment/model/creatCommentDto.js";
import { commentUpdateBtn } from "../ui/Button/ui/ButtonPresets.js";

//props : comment
function handleCommentNav({ postId, props }) {
  const commentCard = document.querySelector(".comment-creat-card");
  const commentCaredTextArea = commentCard.querySelector("textarea");
  commentCaredTextArea.value = props.content;

  const button = commentCard.querySelector(".buttonWrapper");
  button.innerHTML = ""; //초기화
  const updatebutton = commentUpdateBtn({
    getDto: () => creatCommentDto({ content: commentCaredTextArea.value }),
    postId,
    commentId: props.commentId,
  });
  button.appendChild(updatebutton);
  button.dataset.mode = "edit";
}

export default handleCommentNav;
