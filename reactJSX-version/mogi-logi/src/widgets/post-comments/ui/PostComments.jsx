import CommentCard from "../../../entities/comment/ui/CommentCard";
import { CommentCreatForm } from "../../../entities/comment/ui/CommentCreatForm";
import { CommentCardProps } from "../../../entities/comment/model/CommentCardProps";
import { CommentCreatProps } from "../../../entities/comment/model/CommentCreatProps";
import { useCommentDelete } from "../../../features/comment/delete/hooks/useCommentDelete.js";
import { useToast } from "../../../shared/ui/toast/Toast.jsx";
import { useState } from "react";

export function PostComments({ post, onLoad }) {
  const { handleCommentDelete } = useCommentDelete();
  const { addToast } = useToast();

  //수정모드 상태 추가
  const [editMode, setEditMode] = useState(false);
  const [editCommentId, setEditCommentId] = useState(null);
  const [editContent, setEditContent] = useState("");

  //댓글 삭제
  const onDelete = async (commentId) => {
    await handleCommentDelete({ postId: post.id, commentId });
    addToast("삭제 완료");
    onLoad();
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

  const CommentCreatProp = CommentCreatProps(post);
  const comments = post.comments ?? [];

  return (
    <section>
      {/* 댓글 생성 (현재 문제 commentId에 postID가 붙음)*/}
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

      {/* 댓글 목록 */}
      {comments.map((comment) => {
        const commentProps = CommentCardProps(comment);
        return (
          <CommentCard
            key={commentProps.commentId}
            {...commentProps}
            onDelete={() => onDelete(commentProps.commentId)}
            onEdit={() => onEdit(commentProps.commentId, commentProps.content)}
          />
        );
      })}
    </section>
  );
}
