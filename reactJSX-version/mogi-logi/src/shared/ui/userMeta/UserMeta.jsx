import "./UserMeta.css";

export function UserMeta(props) {
  console.log(props);
  return (
    <div className="user-meta">
      <div className="author">{props.author}</div>
      <div className="createdAt">{props.createdAt}</div>
    </div>
  );
}
