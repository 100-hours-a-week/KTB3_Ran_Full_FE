import { useNavigate } from "react-router-dom";
import { ActionGroupContainer } from "@/features/actionGroup";
import { UserMeta } from "@/shared";
import "../style/post.css";
import { ContentType } from "@/shared";
import { usePostDelete } from "@/features/post";

//props : { title, author, date, postId, commentId, content }
export function PostHeaderBase({ title, author, date }) {
  return (
    <div className="post-header-wrapper">
      <div className="post-container">
        <div className="post-meta">
          <div className="post-title">{title}</div>
        </div>
        <div className="user-meta-wrapper">
          <UserMeta author={author} date={date} />
        </div>
      </div>
    </div>
  );
}
