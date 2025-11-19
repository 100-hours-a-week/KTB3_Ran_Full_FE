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
import handleLikeCreat from "../../../like/lib/handleLikeCreat.js";

function BoardPostDetailPage({ post, comments }) {
  //id에 해당하는 게시글 데이터 불러오기
  const boardPostDetailPage = document.createElement("div");
  boardPostDetailPage.className = "board-post-detail-page";
  boardPostDetailPage.style.padding = "var(--padding-card)";

  ///props 변환
  //titleHeader
  const headerProps = postHeaderProps(post);

  //content:내용
  const contentProps = postContentProps({
    content: ` ${post.content}`,
  });

  //count
  const countGroupProps = postCountGroupProps({
    postId: post.id,
    liked: post.liked,
    likeCount: post.likeCount,
    viewCount: post.viewCount,
    commentCount: post.commentCount,
  });

  //컴포넌트 생성
  const header = postHeader(headerProps);
  const content = postContent(contentProps);
  const countGroup = postCountGroup(countGroupProps);
  countGroup.style.display = "flex";
  countGroup.style.justifyContent = "flex-start";

  const postDetailContent = document.createElement("div");
  postDetailContent.className = "post-detail-content";

  postDetailContent.appendChild(header);
  postDetailContent.appendChild(content);
  postDetailContent.appendChild(countGroup);
  // postDetailContent.style.margin = "0 0 30px 0";
  boardPostDetailPage.appendChild(postDetailContent);
  postDetailContent.style.padding = "20px 0";

  //댓글 작성 컴포넌트
  //수정하기 버튼을 클릭 시 해당 카드의 값
  const contentCreatCard = commentCreatCard(post);

  boardPostDetailPage.appendChild(contentCreatCard);

  ///comment card : 배열로 만들기
  if (comments.length === 0) {
    const noComment = document.createElement("div");
    noComment.className = "no-comment";
    noComment.style.margin = "50px";
    noComment.textContent = "등록된 댓글이 없습니다.";
    noComment.style.color = "var(--color-meta)";
    noComment.style.fontSize = "var(--font-size-base)";
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
