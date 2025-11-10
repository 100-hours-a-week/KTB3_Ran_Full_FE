function boardCard({
  title = "",
  author = "",
  imgUrl = "",
  commentCount = 0,
  likeCount = 0,
  viewCount = 0,
  createdAt = "",
} = {}) {
  const container = document.createElement("div");
  container.className = "board-card";
  const style = document.createElement("style");
  style.innerHTML = /*CSS*/ `
    .board-card{
        cursor:pointer;
    }
    .card-background{
        min-width:440px;
    }
    .card-wrapper{
        background-color:var(--color-card);
        padding:var(--padding-h3);
        display:flex;
        flex-direction:column;
        gap:10px;
    }
    .top{
        border-radius:var(--radius-md) var(--radius-md) 0 0;
    }
    .bottom{
        border-radius:0 0 var(--radius-md) var(--radius-md);
    }
    .card-title{
        display:flex;
        font-size:var(--font-size-title);
        font-weight:var(--font-weight-bold);
    }
    .log{
        display:flex;
        justify-content: space-between;
    }
    .count{
        display:flex;
        gap:var(--gap-mn);
    }
    .log div div{
        font-size:var(--font-size-sm);
    }
    .author{
        display:flex;
        font-weight: var(--font-weight-bold);
        font-size:var(--font-size-base);
    }
    hr{
        color:var(--color-background);
    }
  `;

  container.innerHTML = /*HTML */ `
        <div class="card-background">
            <div class="card-wrapper top">
                <div class="card-title">${title}</div>
                <div class="log">
                    <div class="count">
                        <div>좋아요 ${likeCount}</div>
                        <div>댓글 ${commentCount}</div>
                        <div>조회수 ${viewCount}</div>
                    </div>
                    <div class="createdAt">${createdAt}</div>
                </div>
            
            </div>
            <hr/>
            <div class="card-wrapper bottom">
                <div class="author">${author}</div>
            </div>
        </div>
    `;

  const BoardCard = document.createElement("div");
  BoardCard.appendChild(container);
  BoardCard.appendChild(style);

  return BoardCard;
}

export default boardCard;
