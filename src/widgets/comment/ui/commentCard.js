import actionGroup from "../../actionGroup/ui/actionGroup.js";

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

  const actionBtnGroup = actionGroup();

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
