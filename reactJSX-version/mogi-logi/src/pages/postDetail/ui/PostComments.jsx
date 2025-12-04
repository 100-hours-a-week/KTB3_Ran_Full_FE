import CommentCard from "../../../entities/comment/ui/CommentCard";
import { CommentCreatForm } from "../../../entities/comment/ui/CommentCreatForm";
import { CommentCardProps } from "../../../entities/comment/model/CommentCardProps";

export function PostComments({ post }) {
  if (!post) return null;

  const comments = post.comments ?? [];

  return (
    <section>
      {/* 댓글 생성 */}
      <CommentCreatForm postId={post.id} />

      {/* 댓글 목록 */}
      {comments.map((comment) => {
        const commentProps = CommentCardProps(comment);
        return <CommentCard key={commentProps.commentId} {...commentProps} />;
      })}
    </section>
  );
}
