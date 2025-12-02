import "./UserMeta.css";

export function UserMeta(props) {
  return (
    <div className="user-meta">
      <div className="author">{props.author}</div>
      <div className="createdAt">{props.createdAt}</div>
    </div>
  );
}
