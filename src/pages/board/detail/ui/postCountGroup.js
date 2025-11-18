import likeCreateDeleteTogle from "../../../../features/like/model/likeCreateDeleteTogle.js";
import handleLikeCreat from "../../../like/lib/handleLikeCreat.js";
import handleLikeDelete from "../../../like/lib/handleLikeDelete.js";

function postCountGroup(props) {
  const container = document.createElement("div");
  container.className = "post-count-group";
  console.log("props :", props);

  container.innerHTML = /*HTML*/ `
        <div class="count-content" id="likeCount">
            <img src="public/icon/unliked_icon.svg" alt="좋아요">
            <div>${props.likeCount}</div>
        </div>
        <div class="count-content">
            <img src="public/icon/comment_icon.svg" alt="댓글">
            <div>${props.viewCount}</div>
        </div>
        <div class="count-content">
            <img src="public/icon/view_icon.svg" alt="조회수">
            <div>${props.commentCount}</div>
        </div>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `

    #likeCount:hover{
        cursor:pointer;
    }

    #likeCount.enabled{
        background:var(--color-primary);
    }
  
    .post-count-group{
        display:flex;
        gap:var(--gap-mdn);
        justify-content: center;
    }
    .count-content{
        display:flex;
        gap:7px;
        align-items: center;
        font-size:var(--font-size-sm);
        font-weight:var(--font-weight-bold);
      
    }
    .count-content div{
         display:flex;
        color:var(--color-meta);
    }
  `;

  const like = container.querySelector("#likeCount");

  function __updateState() {
    likeCreateDeleteTogle({ container: like, props });
  }
  //초기화
  __updateState();

  const containerWrapper = document.createElement("div");
  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default postCountGroup;
