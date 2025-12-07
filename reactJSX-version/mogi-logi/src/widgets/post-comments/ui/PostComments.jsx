import { useState } from "react";
import { CommentCard, CommentCardProps } from "@/entities/comment";
import {
  CommentCreatForm,
  CommentCreatProps,
  useCommentDelete,
  useComments,
} from "@/features/comment";
import "./postComment.css";

//post  = {id, commentId}
export function PostComments({ post, onLoad }) {
  console.log(post);
  const { data: comments, isLoading: isReading } = useComments(post.id);
  const { commentDelete, isLoading: isDeleting } = useCommentDelete(post.id);

  //수정모드 상태 추가
  const [editMode, setEditMode] = useState(false);
  const [editCommentId, setEditCommentId] = useState(null);
  const [editContent, setEditContent] = useState("");

  //댓글 삭제
  const onDelete = async (commentId) => {
    await commentDelete(commentId);
  };

  // 수정 버튼 클릭 시
  const onEdit = (commentId, content) => {
    setEditMode(true);
    setEditCommentId(commentId);
    setEditContent(content);
  };

  //수정 생성 후 초기화
  const resetMode = () => {
    setEditMode(false);
    setEditCommentId(null);
    setEditContent("");
  };

  if (isReading) return <div>댓글 불러오는 중...</div>;

  const CommentCreatProp = CommentCreatProps(post);

  return (
    <section>
      <CommentCreatForm
        {...CommentCreatProp}
        mode={editMode ? "update" : "create"}
        commentId={editCommentId}
        initalContent={editContent}
        onLoad={() => {
          onLoad();
          resetMode();
        }}
      />
      <div className="post-comment">
        {comments?.map((comment) => {
          const commentProps = CommentCardProps(comment);
          return (
            <CommentCard
              key={commentProps.commentId}
              {...commentProps}
              onDelete={() => onDelete(commentProps.commentId)}
              onEdit={() =>
                onEdit(commentProps.commentId, commentProps.content)
              }
            />
          );
        })}
      </div>
    </section>
  );
}
