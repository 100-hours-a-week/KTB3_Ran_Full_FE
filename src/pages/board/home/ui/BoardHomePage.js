import Title from "../../../../shared/ui/Title/Title.js";
import boardCard from "./boardCard.js";
import handleBoardGet from "../lib/handleBoardGet.js";
import { postCreateBtn } from "../../../../shared/ui/Button/ui/ButtonPresets.js";

function BoardHomePage() {
  const boardHomePage = document.createElement("div");
  boardHomePage.className = "board-home-page";

  const title = Title({
    text: "안녕하세요, <br>아무 말 대잔치 <strong>게시판</strong>입니다.",
  });

  title.className = "boardTitle";

  const postCreateButton = postCreateBtn();

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  handleBoardGet()
    .then((posts) => {
      posts.forEach((post) => {
        cardContainer.appendChild(boardCard(post));
      });
    })
    .catch((error) => {
      cardContainer.textContent = `데이터를 불러오지 못했습니다. : ${error.message}`;
      console.log(error);
    });

  boardHomePage.appendChild(title);
  boardHomePage.appendChild(postCreateButton);
  boardHomePage.appendChild(cardContainer);

  return boardHomePage;
}

export default BoardHomePage;
