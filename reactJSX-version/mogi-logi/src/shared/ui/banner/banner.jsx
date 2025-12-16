import BannerSvg from "./assets/banner.svg?react";

export const Banner = ({ width = "100%", height = "fits", style }) => {
  return <BannerSvg width={width} height={{ height }} style={{ ...style }} />;
};
