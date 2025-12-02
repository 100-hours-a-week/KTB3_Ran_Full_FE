import "../style/postCreate.css";

export function PostCreateTitleInput({
  id,
  type = "text",
  state = {},
  placeholder,
  stateKey,
  onChange,
}) {
  const key = stateKey ?? id;
  const value = state?.[key] ?? "";
  const helper = state?.[`${key}Error`] ?? "";

  return (
    <div className="input-post-container">
      <div className="input-post-wrapper">
        <input
          id={id}
          className="createInput post-input"
          placeholder={placeholder}
          type={type}
          value={value}
          data-field-id={key}
          onChange={(e) => onChange?.(key, e.target.value)}
        />
      </div>
      <div className="post-helper" id={`${id}-helper`}>
        {helper}
      </div>
    </div>
  );
}
