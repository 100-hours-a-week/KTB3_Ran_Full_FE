import { useRef, useLayoutEffect } from "react";

export function AutoResizeTextarea({ value = "", onChange, style, ...props }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const textarea = ref.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <textarea
      {...props}
      ref={ref}
      value={value}
      onChange={onChange}
      style={{
        overflow: "hidden",
        resize: "none",
        "min-height": "500px",
        ...style,
      }}
    />
  );
}
