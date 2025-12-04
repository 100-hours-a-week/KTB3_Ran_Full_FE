import "./InputField.css";

export function InputField({
  id = "",
  label = "",
  value = "",
  type = "text",
  placeholder = "",
  helperText = "",
  onChange,
}) {
  return (
    <div className="input-field-container">
      <div className="title">{label}</div>

      <div className="inputWrapper">
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>

      <div className="helper">{helperText}</div>
    </div>
  );
}
