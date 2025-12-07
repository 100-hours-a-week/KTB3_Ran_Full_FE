import { UserMeta } from "@/shared";
import "../style/post.css";

export function PostHeaderBase({ title, author, createdAt, children }) {
  return (
    <div className="post-header-wrapper">
      <div className="post-container">
        <div className="post-meta">
          <div className="post-title">{title}</div>
        </div>
        <div className="user-meta-wrapper">
          <UserMeta author={author} createdAt={createdAt} />
          {children}
        </div>
      </div>
    </div>
  );
}
