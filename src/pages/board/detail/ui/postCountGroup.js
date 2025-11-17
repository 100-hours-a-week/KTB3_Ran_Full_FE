import likeCreateDeleteTogle from "../../../../features/like/model/likeCreateDeleteTogle.js";
import handleLikeCreat from "../../../like/lib/handleLikeCreat.js";
import handleLikeDelete from "../../../like/lib/handleLikeDelete.js";

function postCountGroup(props) {
  const container = document.createElement("div");
  container.className = "post-count-group";
  console.log("props :", props);

  container.innerHTML = /*HTML*/ `
        <div class="count-content" id="likeCount">
            <div>${props.likeCount}</div>
            <div>좋아요수</div>
        </div>
        <div class="count-content">
            <div>${props.viewCount}</div>
            <div>조회수</div>
        </div>
        <div class="count-content">
            <div>${props.commentCount}</div>
            <div>댓글</div>
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
        padding : var(--padding-h3);
        display:flex;
        gap:var(--gap-mn);
        justify-content: center;
    }
    .count-content{
        background:var(--color-option);
        padding:var(--gap-mn);
        border-radius:var(--radius-md);
        width:76px;
        font-size:var(--font-size-base);
      
    }
    .count-content div{
        
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
