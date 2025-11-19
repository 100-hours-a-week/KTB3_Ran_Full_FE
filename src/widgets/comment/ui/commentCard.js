import { ContentType } from "../../../shared/lib/ContentType.js";
import handleCommentDelete from "../../../shared/lib/handleCommentDelete.js";
import handleCommentNav from "../../../shared/lib/handleCommentNav.js";
import { Props } from "../../../shared/ui/Button/model/Props.js";
import actionGroup from "../../actionGroup/ui/actionGroup.js";
import actionGroupBtn from "../../actionGroupBtn/ui/actionGroupBtn.js";

function commentCount(props) {
  const container = document.createElement("div");
  container.className = "comment-card";

  container.innerHTML = /*HTML*/ `
    <div class="top-area">
      <div class="left">
        <div class="detail">
            <div class="author">${props.author}</div>
            <div class="date">${props.created_at}</div>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="comment-content">${props.content}</div>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    .comment-card{
      color: var(--color-card-text);
      padding: var(--padding-h3);
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .detail{
      display:flex;
      align-items: center;
      gap:20px;
    }

    .detail div{
      font-size:var(--font-size-base);
    }

    .top-area {
      display: flex;
      justify-content: space-between;
          align-items: center;
    }

    .left { 
      display: flex;
      flex-direction: column;
      gap: var(--gap-sm);
    }

    .comment-content {
      font-size: var(--font-size-lg);
      word-break: break-all;
          text-align: left;
    }

    .action-group-button-wrapper {
      cursor: pointer;
      position: relative;
    }
  `;

  const [, route, action, postId] = location.hash.split("/");

  const right = container.querySelector(".right");

  // action 버튼 생성
  const actionBtn = actionGroupBtn();
  actionBtn.classList.add("action-group-btn");

  const btnWrapper = document.createElement("div");
  btnWrapper.className = "action-group-button-wrapper";
  btnWrapper.appendChild(actionBtn);

  right.appendChild(btnWrapper);

  // 액션 설정
  const type = {
    type: ContentType.COMMENT,
    onDelete: () => handleCommentDelete({ postId, props }),
    onEdit: () => handleCommentNav({ postId, props }),
  };

  const btnType = Props(type);
  const modal = actionGroup(btnType);

  // modal을 wrapper 안에 넣기
  btnWrapper.appendChild(modal);

  // toggle
  btnWrapper.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.toggle("active");
  });

  // 다른 곳 클릭하면 닫히게
  document.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  const wrapper = document.createElement("div");
  wrapper.appendChild(style);
  wrapper.appendChild(container);

  return wrapper;
}

export default commentCount;
