import LogoSvg from "./assets/logo.svg?react";

export interface LogoProps {
  width?: number;
  color?: string;
  style?: React.CSSProperties;
}

//매직넘버 조심하기
const logoSize = 10;

export const Logo = ({
  width = logoSize,
  color = "var(--color-primary)",
  style,
}: LogoProps) => {
  return <LogoSvg width={width} style={{ color, ...style }} />;
};
