import { ContentType } from "../../../../shared/lib/ContentType.js";
import handlePostDelete from "../../../../shared/lib/handlePostDelete.js";
import handlePostEdit from "../../../../shared/lib/handlePostNavEdit.js";
import { Props } from "../../../../shared/ui/Button/model/Props.js";
import actionGroup from "../../../../widgets/actionGroup/ui/actionGroup.js";
import actionGroupBtn from "../../../../widgets/actionGroupBtn/ui/actionGroupBtn.js";

function postHeader(props) {
  const headerTop = document.createElement("div");
  headerTop.className = "post-container";

  headerTop.innerHTML = /*HTML*/ `
    <div class="post-meta">
        <div class="post-title">${props.title}</div>
        <div class="detail">
            <div class="log">
                <div class="author">${props.author}</div>
                <div class="date">${props.date}</div>
            </div>
        </div>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS */ `
    .date{
        color:var(--color-meta) !important;
        font-size
    }
    .post-container div{
        display:flex;
        color:var(--color-card-text);
        gap:var(--gap-mn);
            top: 100%;
    }

    .post-meta{
        display: flex;
        flex-direction: column;
    }

    .post-container{
        padding : var(--padding-h3);
        align-items: flex-start;
        display: flex;
        flex-direction : row;
        gap : var(--gap-mn);
        justify-content: space-between;
    }

    .post-title{
        font-weight:var(--font-weight-bold);
        font-size:var(--font-size-title);
    }

    .author{
        font-weight:var(--font-weight-bold);
        font-size:var(--font-size-base);
    }

    .log{
        gap:10px;
    }
    .log div{
        font-size:var(--font-size-base);
    }
    .detail{
        justify-content: space-between;
    }
    .action-group{
        position: relative;
        display: flex;
    }
    .action-group-button-wrapper{
        position:relative;
        display:inline-block;
    }

    
  `;
  const actionGroupButton = actionGroupBtn();
  const actionGroupBtnWrapper = document.createElement("div");
  actionGroupBtnWrapper.appendChild(actionGroupButton);
  actionGroupBtnWrapper.className = "action-group-button-wrapper";

  actionGroupButton.className = "action-group";
  const type = {
    type: ContentType.POST,
    onDelete: () => handlePostDelete(props.postId),
    onEdit: () => handlePostEdit(props),
  };

  const btnType = Props(type);

  //   const actionBtnGroup = actionGroup(btnType);

  //   const postDetail = headerTop.querySelector(".detail");
  const modal = actionGroup(btnType);
  actionGroupBtnWrapper.addEventListener("click", () => {
    modal.classList.toggle("active");
  });

  headerTop.appendChild(actionGroupBtnWrapper);

  const HeaderTop = document.createElement("div");
  HeaderTop.appendChild(style);
  actionGroupBtnWrapper.appendChild(modal);
  HeaderTop.appendChild(headerTop);

  return HeaderTop;
}

export default postHeader;
