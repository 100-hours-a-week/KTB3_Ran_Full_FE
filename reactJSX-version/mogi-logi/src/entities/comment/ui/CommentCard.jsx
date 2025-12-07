import { ActionGroupContainer } from "@/features/actionGroup";
import { ContentType } from "../../../shared/lib/ContentType";
import { UserMeta } from "../../../shared/ui/userMeta/userMeta";
import "../style/comment.css";
import { UserMetaProps } from "../../../shared/ui/userMeta/UserMetaProps.js";

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
