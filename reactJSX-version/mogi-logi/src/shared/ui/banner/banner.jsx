import BannerSvg from "./assets/banner.svg?react";

export const Banner = ({ width   = "100%", style }) => {
  return <BannerSvg width={width} style={{ ...style }} />;
};
