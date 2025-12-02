import FooterSvg from "./assets/footer-logo.svg?react";

//매직넘버 조심하기
const logoSize = 10;

export const FooterLogo = ({
  width = logoSize,
  color = "var(--color-primary)",
  style,
}) => {
  return <FooterSvg width={width} style={{ color, ...style }} />;
};
