import post from "../../features/board/api/postHomeFetch.js";
import commentUpdateFetch from "../../features/comment/api/commentUpdateFetch.js";
import { creatCommentDto } from "../../features/comment/model/creatCommentDto.js";
import { commentUpdateBtn } from "../ui/Button/ui/ButtonPresets.js";

//props : comment
function handleCommentNav({ postId, props }) {
  const commentCard = document.querySelector(".comment-creat-card");
  const commentCaredTextArea = commentCard.querySelector("textarea");
  commentCaredTextArea.value = props.content;

  const buttonWrapper = commentCard.querySelector(".buttonWrapper");
  buttonWrapper.innerHTML = ""; //초기화

  const updatebutton = commentUpdateBtn({
    getDto: () => creatCommentDto({ content: commentCaredTextArea.value }),
    postId,
    commentId: props.commentId,
  });
  buttonWrapper.appendChild(updatebutton);

  const button = buttonWrapper.querySelector("button");

  let value = commentCaredTextArea.value;

  function __updateState() {
    if (value.length == 0) {
      button.disabled = true;
      button.classList.add("disabled");
    } else {
      button.disabled = false;
      button.classList.remove("disabled");
    }
  }

  commentCaredTextArea.addEventListener("input", (e) => {
    value = e.target.value;
    __updateState();
  });

  buttonWrapper.dataset.mode = "edit";
}

export default handleCommentNav;
