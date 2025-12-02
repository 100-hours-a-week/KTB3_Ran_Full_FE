import { UserMeta } from "../../../shared/ui/userMeta/userMeta";
import "../style/post.css";

//props : { title, author, date, postId, commentId }
export default function PostHeader(props) {
  console.log(props);
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
        </div>
        <div className="action-group-button-wrapper"></div>
      </div>
    </div>
  );
}
