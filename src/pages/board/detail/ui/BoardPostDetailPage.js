import postContent from "./postContent.js";
import postHeader from "./postHeader.js";
import postCountGroup from "./postCountGroup.js";
import commentCount from "../../../../widgets/comment/ui/commentCard.js";
import commentCreatCard from "../../../../widgets/comment/ui/commentCreatCard.js";
import { commendProps } from "../../../../widgets/comment/model/commendProps.js";
import { commentDto } from "../../model/commentDto.js";
import { boardDetailProps } from "../../model/boardDto.js";
import { postHeaderProps } from "../model/postHeaderProps.js";
import { postContentProps } from "../model/postContentProps.js";
import { postCountGroupProps } from "../model/postCountGroupProps.js";
import handleCreatComment from "../lib/handleCreatComment.js";
import { creatCommentDto } from "../../../../features/comment/model/creatCommentDto.js";

function BoardPostDetailPage({ post, comments }) {
  //id에 해당하는 게시글 데이터 불러오기
  const boardPostDetailPage = document.createElement("div");
  boardPostDetailPage.className = "board-post-detail-page";

  ///props 변환
  //titleHeader
  const headerProps = postHeaderProps(post);

  //content:내용
  const contentProps = postContentProps({
    content: ` ${post.content}`,
  });

  //count
  const countGroupProps = postCountGroupProps({
    likeCount: `${post.likeCount}`,
    viewCount: `${post.viewCount}`,
    commentCount: `${post.commentCount}`,
  });

  //컴포넌트 생성
  const header = postHeader(headerProps);
  const content = postContent(contentProps);
  const countGroup = postCountGroup(countGroupProps);

  boardPostDetailPage.appendChild(header);
  boardPostDetailPage.appendChild(document.createElement("hr"));
  boardPostDetailPage.appendChild(content);
  boardPostDetailPage.appendChild(countGroup);
  boardPostDetailPage.appendChild(document.createElement("hr"));

  //댓글 작성 컴포넌트
  const contentCreatCard = commentCreatCard();
  contentCreatCard.addEventListener("commentSubmit", (e) => {
    const content = e.detail.value;
    console.log(content);
    handleCreatComment(content);
  });

  boardPostDetailPage.appendChild(contentCreatCard);

  ///comment card : 배열로 만들기
  if (comments.length === 0) {
    const noComment = document.createElement("div");
    noComment.textContent = "등록된 댓글이 없습니다.";
    boardPostDetailPage.appendChild(noComment);
  }

  comments.forEach((commendData) => {
    const props = commendProps(commendData);
    const card = commentCount(props);
    console.log(props);
    boardPostDetailPage.appendChild(card);
  });

  return boardPostDetailPage;
}

export default BoardPostDetailPage;
