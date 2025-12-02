import { useNavigate } from "react-router-dom";
import { UserMeta } from "../../../shared/ui/userMeta/userMeta";
import "../style/post.css";
import PostCountGroup from "./PostCountGroup";

export function PostCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/get/${props.postId}`);
  };

  return (
    <div className="board-card" onClick={handleClick}>
      <div className="card-img" />
      <div className="card-wrapper">
        {/* 게시글 헤더/내용 */}
        <div className="card-inner">
          <div className="card-title">{props.title}</div>
          <div className="card-content">{props.content}</div>
        </div>
        {/* 사용자 메타 */}
        <div className="card-meta">
          <UserMeta {...props} />
          <PostCountGroup {...props} />
        </div>
      </div>
    </div>
  );
}
