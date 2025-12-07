import "./UserMeta.css";

export function UserMeta({ author, createdAt }) {
  return (
    <div className="user-meta">
      <div className="author">{author}</div>
      <div className="createdAt">{createdAt}</div>
    </div>
  );
}
