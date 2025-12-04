import { useState } from "react";
import { AutoResizeTextarea } from "../../../../shared/ui/textarea/AutoResizeTextarea";

export default function PostCreateContentInput({
  placeholder = "",
  helper,
  value,
  onChange,
}) {
  const [content, setContent] = useState("");
  return (
    <div className="input-post-content-container">
      <div className="input-post-wrapper">
        <AutoResizeTextarea
          className="create-input textarea-content post-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>

      <div className="post-content-helper">{helper}</div>
    </div>
  );
}
