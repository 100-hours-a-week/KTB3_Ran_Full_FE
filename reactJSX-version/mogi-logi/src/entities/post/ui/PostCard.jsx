import { useNavigate } from "react-router-dom";
import { UserMeta } from "@/shared";
import "../style/post.css";
import { PostCountGroup } from "./PostCountGroup";

export function PostCard({
  postId,
  title,
  content,
  author,
  createdAt,
  commentCount,
  likeCount,
  viewCount,
  liked,
  onLikeToggle,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/get/${postId}`);
  };

  return (
    <div className="board-card" onClick={handleClick}>
      <div className="card-img" />
      <div className="card-wrapper">
        {/* 게시글 헤더/내용 */}
        <div className="card-inner">
          <div className="card-title">{title}</div>
          <div className="card-content ellipsis-2">{content}</div>
        </div>
        {/* 사용자 메타 */}
        <div className="card-meta">
          <UserMeta author={author} date={createdAt} />
          <PostCountGroup
            likeCount={likeCount}
            commentCount={commentCount}
            viewCount={viewCount}
            liked={liked}
            onLikeToggle={onLikeToggle}
          />
        </div>
      </div>
    </div>
  );
}
