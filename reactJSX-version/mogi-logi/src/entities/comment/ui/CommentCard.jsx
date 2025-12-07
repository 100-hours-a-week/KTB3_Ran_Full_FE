import { ActionGroupContainer } from "@/features/actionGroup";
import { ContentType, UserMeta, UserMetaProps } from "@/shared";
import "../style/comment.css";

// props: { author, createdAt, commentId, content, postId }
export function CommentCard(props) {
  const userMetaProps = UserMetaProps(props);
  return (
    <div className="comment-card">
      <div className="top-area">
        <UserMeta {...userMetaProps} />
        <ActionGroupContainer
          domainType={ContentType["comment"]}
          postId={props.postId}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
        <div className="action-wrapper"></div>
      </div>

      {/* --- 댓글 내용 --- */}
      <div className="comment-content">{props.content}</div>
    </div>
  );
}
