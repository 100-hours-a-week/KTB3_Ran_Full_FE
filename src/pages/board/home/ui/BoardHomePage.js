import Title from "../../../../shared/ui/Title/Title.js";
import boardCard from "../../../../widgets/post/ui/boardCard.js";
import handleBoardGet from "../../../../features/board/model/handleBoardGet.js";
import { postCreateBtn } from "../../../../shared/ui/Button/ui/ButtonPresets.js";
import { boardPostDataDto } from "../../model/boardPostDto.js";
import sessionUser from "../../../../shared/utils/session.js";

function BoardHomePage() {
  const boardHomePage = document.createElement("div");
  boardHomePage.className = "board-home-page";
  const user = sessionUser.getUser();

  const title = Title({
    text: `<strong>${user.username}</strong>님, <br>오늘은 어떤 개념을 요약해볼까요?`,
  });

  title.className = "boardTitle";

  const postCreateButton = postCreateBtn();
  postCreateButton.className = "post-create-button";

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  handleBoardGet()
    .then((posts) => {
      posts.forEach((post) => {
        const boardPostProp = boardPostDataDto(post);
        const card = boardCard(boardPostProp);
        cardContainer.appendChild(card);
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
