import CommentCard from "../../../entities/comment/ui/CommentCard";
import { CommentCreatForm } from "../../../entities/comment/ui/CommentCreatForm";
import { CommentCardProps } from "../../../entities/comment/model/CommentCardProps";
import { CommentCreatProps } from "../../../entities/comment/model/CommentCreatProps";
import { useCommentDelete } from "../../../features/comment/delete/hooks/useCommentDelete.js";
import { useNavigate } from "react-router-dom";

export function PostComments({ post, onLoad }) {
  console.log("postComment", post); //id
  const { handleCommentDelete } = useCommentDelete();

  const onDelete = async (commentId) => {
    await handleCommentDelete({ postId: post.id, commentId });
    onLoad();
  };

  const CommentCreatProp = CommentCreatProps(post);
  const comments = post.comments ?? [];

  return (
    <section>
      {/* 댓글 생성 (현재 문제 commentId에 postID가 붙음)*/}
      <CommentCreatForm {...CommentCreatProp} onLoad={onLoad} />

      {/* 댓글 목록 */}
      {comments.map((comment) => {
        const commentProps = CommentCardProps(comment);
        return (
          <CommentCard
            key={commentProps.commentId}
            {...commentProps}
            onDelete={() => onDelete(commentProps.commentId)}
          />
        );
      })}
    </section>
  );
}
