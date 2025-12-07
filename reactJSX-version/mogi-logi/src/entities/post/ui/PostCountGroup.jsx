import { Icon } from "../../../shared/ui/icons/Icon";
import "../style/post.css";

export function PostCountGroup({
  likeCount,
  commentCount,
  viewCount,
  liked,
  onLikeToggle,
  likeColor,
}) {
  return (
    <div className="post-count-group">
      {/* LIKE */}
      <div
        className={`count-content like ${liked ? "enabled" : ""}`}
        onClick={onLikeToggle}
      >
        <Icon
          name={liked ? "liked" : "unliked"}
          style={{ color: likeColor, cursor: "pointer" }}
        />
        <div className="count">{likeCount}</div>
      </div>

      {/* COMMENT */}
      <div className="count-content">
        <Icon name="comment" />
        <div>{commentCount}</div>
      </div>

      {/* VIEW */}
      <div className="count-content">
        <Icon name="view" />
        <div>{viewCount}</div>
      </div>
    </div>
  );
}
