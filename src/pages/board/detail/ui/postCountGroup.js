import likeCreateDeleteTogle from "../../../../features/like/model/likeCreateDeleteTogle.js";

function postCountGroup(props) {
  const container = document.createElement("div");
  container.className = "post-count-group";

  container.innerHTML = /*HTML*/ `
        <div class="count-content" id="likeCount">
            <img class="like-icon" src="public/icon/unliked_icon.svg" alt="좋아요">
            <div>${props.likeCount}</div>
        </div>
        <div class="count-content">
            <img src="public/icon/comment_icon.svg" alt="댓글">
            <div>${props.commentCount}</div>
        </div>
        <div class="count-content">
            <img src="public/icon/view_icon.svg" alt="조회수">
            <div>${props.viewCount}</div>
        </div>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    #likeCount:hover{
        cursor:pointer;
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
  const likeImg = like.querySelector(".like-icon");

  function updateLikeIcon() {
    if (like.classList.contains("enabled")) {
      likeImg.src = "public/icon/liked_icon.svg";
    } else {
      likeImg.src = "public/icon/unliked_icon.svg";
    }
  }

  function __updateState() {
    likeCreateDeleteTogle({ container: like, props });
    updateLikeIcon();
  }

  __updateState();

  like.addEventListener("click", () => {
    likeCreateDeleteTogle({ container: like, props });
    updateLikeIcon();
  });

  const wrapper = document.createElement("div");
  wrapper.appendChild(style);
  wrapper.appendChild(container);

  return wrapper;
}

export default postCountGroup;
