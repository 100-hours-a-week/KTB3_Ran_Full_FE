import postCountGroup from "../../../pages/board/detail/ui/postCountGroup/postCountGroup.js";

function boardCard(props) {
  const container = document.createElement("div");
  container.className = "board-card";
  const style = document.createElement("style");
  style.innerHTML = /*CSS*/ `
    
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
