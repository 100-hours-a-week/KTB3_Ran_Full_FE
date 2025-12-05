import { useNavigate } from "react-router-dom";
import { ActionGroupContainer } from "../../../features/actionGroup/ui/ActionGroupContainer";
import { UserMeta } from "../../../shared/ui/userMeta/userMeta";
import "../style/post.css";
import { ContentType } from "../../../shared/lib/ContentType";
import { usePostDelete } from "../../../features/post/delete/hooks/usePostDelete.jsx";
import { useToast } from "../../../shared/ui/toast/Toast.jsx";

//props : { title, author, date, postId, commentId }
export default function PostHeader(props) {
  const navigate = useNavigate();
  const { handlePostDelete } = usePostDelete();
  const { addToast } = useToast();
  console.log(props);

  const onDelete = async () => {
    await handlePostDelete({ postId: props.postId });
    addToast("삭제 완료");
    navigate("/home");
  };

  return (
    <div className="post-header-wrapper">
      <div className="post-container">
        {/* 메타 정보 */}
        <div className="post-meta">
          <div className="post-title">{props.title}</div>
        </div>

        {/* 액션 버튼 그룹 */}
        <div className="user-meta-wrapper">
          <UserMeta {...props} />
          <ActionGroupContainer
            domainType={ContentType["post"]}
            postId={props.postId}
            onEdit={() => navigate(`/post/edit/${props.postId}`)}
            onDelete={onDelete}
          />
        </div>
        <div className="action-group-button-wrapper"></div>
      </div>
    </div>
  );
}
