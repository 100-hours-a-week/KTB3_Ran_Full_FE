import postCountGroup from "../../../pages/board/detail/ui/postCountGroup.js";

function boardCard(props) {
  const container = document.createElement("div");
  container.className = "board-card";
  const style = document.createElement("style");
  style.innerHTML = /*CSS*/ `
    .userImg{
        width:10%;
        background:var(--color-meta);
        aspect-ratio:1;
        border-radius:50px;
    }
    .board-card{
        cursor:pointer;
    }
    .card-background{
        min-width:440px;
    }
    .card-wrapper{
        background-color:var(--color-card);
        padding:var(--padding-card);
        display:flex;
        flex-direction:column;
        gap:10px;
        border-radius:var(--radius-button-lg);
        border:1px solid #dadadaff;
        box-shadow: 0 4px 14px rgba(137, 137, 137, 0.1);


    }
    .createdAt{
        font-size:var(--font-size-sm);
        display: flex;
    }
    .card-meta{
        gap: 10px;
        display: flex;
        align-items: center;
        margin : 0 0 10px 0
    }
    .card-title{
        display:flex;
        font-size:var(--font-size-lg);
        font-weight:var(--font-weight-bold);
    }
    .log{
        display:flex;
        justify-content: end;
    }
    .card-header div{
        color:var(--color-card-text);
        text-align: start;
    }
    .card-header {
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
    .log div div{
        font-size:var(--font-size-sm);
        display:flex;
        align-items: center;
        gap: 7px;
        font-weight:var(--font-weight-bold);
    }
    .createdAt{
        font-size:var(--font-size-content);
        color:var(--color-meta);
    }
    .author{
        display:flex;
        font-weight: var(--font-weight-bold);
        font-size:var(--font-size-mtitle);
        color:var(--color-primary);
    }
    hr{
        color:var(--color-background);
    }
  `;

  container.innerHTML = /*HTML */ `
        <div class="card-background">
            <div class="card-wrapper">
                <div class="card-meta">
                    <div class="userImg"></div>
                    <div class="card-meta-text">
                        <div class="author">${props.author}</div>
                        <div class="createdAt">${props.createAt}</div>
                    </div>
                </div>
                <div class="card-header">
                    <div class="card-title">${props.title}</div>
                    <div class="card-content">${props.content}</div>
                </div>
            </div>
        </div>
    `;

  const card = container.querySelector(".card-wrapper");
  const countGroup = postCountGroup(props);
  card.appendChild(countGroup);
  countGroup.style.display = "flex";
  countGroup.style.justifyContent = "flex-end";

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
