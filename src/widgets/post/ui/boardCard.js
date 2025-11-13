function boardCard(props) {
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
                <div class="card-title">${props.title}</div>
                <div class="log">
                    <div class="count">
                        <div>좋아요 ${props.likeCount}</div>
                        <div>댓글 ${props.commentCount}</div>
                        <div>조회수 ${props.viewCount}</div>
                    </div>
                    <div class="createdAt">${props.createAt}</div>
                </div>
            
            </div>
            <hr/>
            <div class="card-wrapper bottom">
                <div class="author">${props.author}</div>
            </div>
        </div>
    `;

  //클릭 이벤트
  container.addEventListener("click", () => {
    location.hash = `/post/get/${props.id}`;
  });
  const BoardCard = document.createElement("div");
  BoardCard.appendChild(container);
  BoardCard.appendChild(style);

  return BoardCard;
}

export default boardCard;
