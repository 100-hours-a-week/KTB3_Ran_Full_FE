import "./InputField.css";

interface InputFieldProps {
  id?: string;
  label?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  onChange?: (value: string) => void;
}

export function InputField({
  id = "",
  label = "",
  value = "",
  type = "text",
  placeholder = "",
  helperText = "",
  onChange,
}: InputFieldProps) {
  return (
    <div className="input-field-container">
      <div className="title">{label}</div>

      <div className="inputWrapper">
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>

      <div className="helper">{helperText}</div>
    </div>
  );
}
