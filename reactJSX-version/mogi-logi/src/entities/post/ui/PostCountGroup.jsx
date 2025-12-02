import { Icon } from "../../../shared/ui/icons/Icon";
import "../style/post.css";

export default function PostCountGroup(props) {
  return (
    <div className="post-count-group">
      {/* Like */}
      <div
        className={`count-content like ${props.liked ? "enabled" : ""}`}
        data-role="like-wrapper"
        data-post-id={props.postId}
      >
        <Icon name="unliked" />
        <div className="count" data-role="like-count">
          {props.likeCount}
        </div>
      </div>

      {/* Comment */}
      <div className="count-content">
        <Icon name="comment" />
        <div>{props.commentCount}</div>
      </div>

      {/* View */}
      <div className="count-content">
        <Icon name="view" />
        <div>{props.viewCount}</div>
      </div>
    </div>
  );
}
