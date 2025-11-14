import { ContentType } from "../../../../shared/lib/ContentType.js";
import handlePostDelete from "../../../../shared/lib/handlePostDelete.js";
import handlePostEdit from "../../../../shared/lib/handlePostEdit.js";
import { Props } from "../../../../shared/ui/Button/model/Props.js";
import actionGroup from "../../../../widgets/actionGroup/ui/actionGroup.js";

function postHeader(props) {
  const headerTop = document.createElement("div");
  headerTop.className = "post-container";

  headerTop.innerHTML = /*HTML*/ `
        <div class="post-title">${props.title}</div>
        <div class="detail">
            <div class="log">
                <div class="author">${props.author}</div>
                <div class="date">${props.date}</div>
            </div>
        </div>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS */ `
    .post-container div{
        display:flex;
    }

    .post-container{
        padding : var(--padding-h3);
        display: flex;
        flex-direction : column;
        gap : var(--gap-mn);
    }

    .post-title{
        font-weight:var(--font-weight-bold);
        font-size:var(--font-size-title);
    }

    .author{
        font-weight:var(--font-weight-bold);
    }

    .log{
        gap:10px;
    }

    .detail{
        justify-content: space-between;
    }

    
  `;

  const type = {
    type: ContentType.POST,
    onDelete: () => handlePostDelete(props.postId),
    onEdit: () => handlePostEdit(props),
  };

  const btnType = Props(type);

  const actionBtnGroup = actionGroup(btnType);

  const postDetail = headerTop.querySelector(".detail");
  postDetail.appendChild(actionBtnGroup);

  const HeaderTop = document.createElement("div");
  HeaderTop.appendChild(style);
  HeaderTop.appendChild(headerTop);

  return HeaderTop;
}

export default postHeader;
