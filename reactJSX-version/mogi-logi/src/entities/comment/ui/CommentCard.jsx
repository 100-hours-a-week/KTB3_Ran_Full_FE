import { UserMeta } from "../../../shared/ui/userMeta/userMeta";
import "../style/comment.css";

// props: { author, createdAt, commentId, content, postId }
export default function CommentCard(props) {
  props = {
    commentId: 8,
    content: "props와 어떤 차이가 있을까요?",
    authorId: 0,
    author: "프론트장인",
    createdAt: "2025-11-30 18:57:35", //
  };
  return (
    <div className="comment-card">
      <div className="top-area">
        <UserMeta {...props} />
        <div className="action-wrapper"></div>
      </div>

      {/* --- 댓글 내용 --- */}
      <div className="comment-content">{props.content}</div>
    </div>
  );
}
