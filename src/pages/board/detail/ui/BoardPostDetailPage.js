import postContent from "./postContent.js";
import postHeader from "./postHeader.js";
import postCountGroup from "./postCountGroup.js";
import commentCount from "../../../../widgets/comment/ui/commentCard.js";
import commentCreatCard from "../../../../widgets/comment/ui/commentCreatCard.js";

function BoardPostDetailPage() {
  const boardPostDetailPage = document.createElement("div");
  boardPostDetailPage.className = "board-post-detail-page";

  //titleHeader
  const header = postHeader({ title: "안녕", author: "dd", date: "ddd" });

  //content:내용
  const content = postContent({
    content:
      "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssș",
  });
  //countGroup
  const countGroup = postCountGroup({
    likeCount: "1",
    viewCount: "2",
    commentCount: "3",
  });

  boardPostDetailPage.appendChild(header);
  boardPostDetailPage.appendChild(document.createElement("hr"));
  boardPostDetailPage.appendChild(content);
  boardPostDetailPage.appendChild(countGroup);
  boardPostDetailPage.appendChild(document.createElement("hr"));

  //댓글 작성 컴포넌트
  const contentCreatCard = commentCreatCard();
  boardPostDetailPage.appendChild(contentCreatCard);

  ///comment card
  const comment = commentCount({
    author: "ddd",
    date: "dd",
    createAt: "ddd",
    content: "ddd",
  });
  boardPostDetailPage.appendChild(comment);

  return boardPostDetailPage;
}

export default BoardPostDetailPage;
