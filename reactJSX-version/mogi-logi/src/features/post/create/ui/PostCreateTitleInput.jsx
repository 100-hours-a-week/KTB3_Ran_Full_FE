import "../style/postCreate.css";

export function PostCreateTitleInput({
  type = "text",
  value = "",
  placeholder,
  helper,
  onChange,
}) {
  return (
    <div className="input-post-container">
      <div className="input-post-wrapper">
        <input
          className="createInput post-input"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="post-helper">{helper}</div>
    </div>
  );
}
