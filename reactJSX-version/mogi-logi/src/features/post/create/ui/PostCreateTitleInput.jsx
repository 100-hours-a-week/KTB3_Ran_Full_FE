import "../style/postCreate.css";

export function PostCreateTitleInput({ type = "text", placeholder, helper }) {
  return (
    <div className="input-post-container">
      <div className="input-post-wrapper">
        <input
          className="createInput post-input"
          placeholder={placeholder}
          type={type}
        />
      </div>
      <div className="post-helper">{helper}</div>
    </div>
  );
}
