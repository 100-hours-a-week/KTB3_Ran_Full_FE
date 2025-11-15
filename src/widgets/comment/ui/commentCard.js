import { ContentType } from "../../../shared/lib/ContentType.js";
import handleCommentDelete from "../../../shared/lib/handleCommentDelete.js";
import handleCommentNav from "../../../shared/lib/handleCommentNav.js";
import handlePostDelete from "../../../shared/lib/handlePostDelete.js";
import actionGroup from "../../actionGroup/ui/actionGroup.js";

//commentId
function commentCount(props) {
  const container = document.createElement("div");
  container.className = "comment-card";

  container.innerHTML = /*HTML*/ `
        <div class="detail">
            <div class="log">
                <div class="author">${props.author}</div>
                <div class="date">${props.created_at}</div>
            </div>
        </div>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
      .comment-card div{
        display:flex;
    }

    .comment-card{
        padding : var(--padding-h3);
        display: flex;
        flex-direction : column;
        gap : var(--gap-mn);
    }
    .comment-content{


    }

  `;

  const [, route, action, postId] = location.hash.split("/");
  const actionBtnGroup = actionGroup({
    type: ContentType.COMMENT,
    onDelete: () => handleCommentDelete({ postId, props }),
    onEdit: () => handleCommentNav({ postId, props }),
  });

  const postDetail = container.querySelector(".detail");
  postDetail.appendChild(actionBtnGroup);

  const containerWrapper = document.createElement("div");
  const commentContent = document.createElement("div");
  commentContent.className = "comment-content";
  commentContent.innerHTML = /*HTML */ `
    <div>${props.content}</div>
  `;

  container.appendChild(commentContent);

  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default commentCount;
