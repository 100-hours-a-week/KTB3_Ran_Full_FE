import { useNavigate } from "react-router-dom";
import { ActionGroupContainer } from "@/features/actionGroup";
import { UserMeta } from "../../../shared/ui/userMeta/userMeta";
import "../style/post.css";
import { ContentType } from "../../../shared/lib/ContentType";
import { usePostDelete } from "@/features/post";

//props : { title, author, date, postId, commentId, content }
export function PostHeader({ title, author, date, postId, content }) {
  const navigate = useNavigate();
  const { postDelete, isLoading } = usePostDelete(postId);

  const onDelete = async () => {
    await postDelete();
  };

  const onEdit = async () =>
    navigate(`/post/create`, {
      state: {
        mode: "update",
        postId: postId,
        title: title,
        content: content,
      },
    });

  return (
    <div className="post-header-wrapper">
      <div className="post-container">
        {/* 메타 정보 */}
        <div className="post-meta">
          <div className="post-title">{title}</div>
        </div>

        {/* 액션 버튼 그룹 */}
        <div className="user-meta-wrapper">
          <UserMeta author={author} date={date} />
          <ActionGroupContainer
            domainType={ContentType["post"]}
            postId={postId}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
        <div className="action-group-button-wrapper"></div>
      </div>
    </div>
  );
}
