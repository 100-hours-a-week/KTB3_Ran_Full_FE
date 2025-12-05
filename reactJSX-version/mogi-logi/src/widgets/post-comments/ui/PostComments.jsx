import CommentCard from "../../../entities/comment/ui/CommentCard";
import { CommentCreatForm } from "../../../entities/comment/ui/CommentCreatForm";
import { CommentCardProps } from "../../../entities/comment/model/CommentCardProps";
import { CommentCreatProps } from "../../../entities/comment/model/CommentCreatProps";

export function PostComments({ post, onLoad }) {
  if (!post) return null;
  console.log("postComment", post); //id

  const CommentCreatProp = CommentCreatProps(post);
  const comments = post.comments ?? [];

  return (
    <section>
      {/* 댓글 생성 (현재 문제 commentId에 postID가 붙음)*/}
      <CommentCreatForm {...CommentCreatProp} onLoad={onLoad} />

      {/* 댓글 목록 */}
      {comments.map((comment) => {
        const commentProps = CommentCardProps(comment);
        return <CommentCard key={commentProps.commentId} {...commentProps} />;
      })}
    </section>
  );
}
