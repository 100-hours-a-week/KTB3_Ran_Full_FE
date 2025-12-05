import { ActionGroupContainer } from "../../../features/actionGroup/ui/ActionGroupContainer";
import { ContentType } from "../../../shared/lib/ContentType";
import { UserMeta } from "../../../shared/ui/userMeta/userMeta";
import "../style/comment.css";

// props: { author, createdAt, commentId, content, postId }
export default function CommentCard(props) {
  console.log("ondElete", props.onDelete);
  return (
    <div className="comment-card">
      <div className="top-area">
        <UserMeta {...props} />
        <ActionGroupContainer
          domainType={ContentType["comment"]}
          postId={props.postId}
          onEdit={() => console.log("수정")}
          onDelete={props.onDelete}
        />
        <div className="action-wrapper"></div>
      </div>

      {/* --- 댓글 내용 --- */}
      <div className="comment-content">{props.content}</div>
    </div>
  );
}
