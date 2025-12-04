import { ActionGroupContainer } from "../../../features/actionGroup/ui/ActionGroupContainer";
import { deletePost } from "../../../features/post/delete/model/useDeletePost";
import { ContentType } from "../../../shared/lib/ContentType";
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
        <ActionGroupContainer
          domainType={ContentType["comment"]}
          postId={props.postId}
          onEdit={() => console.log("수정")}
          onDelete={() => deletePost(props.commentId)}
        />
        <div className="action-wrapper"></div>
      </div>

      {/* --- 댓글 내용 --- */}
      <div className="comment-content">{props.content}</div>
    </div>
  );
}
