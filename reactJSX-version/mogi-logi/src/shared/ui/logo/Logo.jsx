import LogoSvg from "./assets/logo.svg?react";

//매직넘버 조심하기
const logoSize = 10;

export const Logo = ({
  width = logoSize,
  color = "var(--color-primary)",
  style,
}) => {
  return <LogoSvg width={width} style={{ color, ...style }} />;
};
