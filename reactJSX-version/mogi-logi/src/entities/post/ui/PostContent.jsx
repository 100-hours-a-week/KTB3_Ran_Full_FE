import "../style/post.css";

export function PostContent(props) {
  return <div className="post-content-wrapper word-break">{props.content}</div>;
}
