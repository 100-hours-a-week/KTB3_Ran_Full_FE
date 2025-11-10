function postCountGroup({ likeCount = "", viewCount = "", commentCount = "" }) {
  const container = document.createElement("div");
  container.className = "post-count-group";

  container.innerHTML = /*HTML*/ `
        <div class="count-content">
            <div>${likeCount}</div>
            <div>좋아요수</div>
        </div>
        <div class="count-content">
            <div>${viewCount}</div>
            <div>조회수</div>
        </div>
        <div class="count-content">
            <div>${commentCount}</div>
            <div>댓글</div>
        </div>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
  
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

  const containerWrapper = document.createElement("div");
  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default postCountGroup;
