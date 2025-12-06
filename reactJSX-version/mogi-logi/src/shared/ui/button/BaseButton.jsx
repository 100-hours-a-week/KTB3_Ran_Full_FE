//base Abstract
//버튼의 가장 근본 부모 클래스
//아이콘의 위치 : 왼쪽, 오른쪽, onlyIcon, text만
import "./button.css";

export default function BaseButton({
  variant = "primary", //primary | secondary-outline | secondary-filled | icon
  size = "md", //sm | md | lg
  shape = "rounded", //rounded | circle | square
  fullWidth = false,
  iconOnly = false,
  disabled = false,
  color = "default", //primary | default |
  children,
  className = "",
  ...props
}) {
  const classes = [
    "btn",
    `btn-${variant}`,
    `btn-size-${size}`,
    `btn-shape-${shape}`,
    `btn-color-${color}`,
    iconOnly ? "btn-icon-only" : "",
    disabled ? "btn-disabled" : "",
    fullWidth ? "btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={classes} disabled={disabled} {...props}>
      {/*버튼 아이콘만 */}
      {iconOnly && children && <span className="btn-icon">{children}</span>}

      {/* 버튼 text만 */}
      {!iconOnly && children && <span className="btn-label">{children}</span>}
    </button>
  );
}
