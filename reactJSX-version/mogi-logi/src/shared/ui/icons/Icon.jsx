// 팩토리 패턴 : svg 아이콘
// 선택 이유: 해당 서비스에서 사용하는 아이콘은 커뮤니티/블로그 중심이라
// 아이콘 종류 변화가 많지 않아 svg만을 사용하는 팩토리 패턴으로 구현함.

import { IconMap } from "./map";
import "./icon.css";

export const Icon = ({ name, size = 20, className }) => {
  const SvgIcon = IconMap[name];

  if (!SvgIcon) {
    console.warn(`${name}을 찾지 못했습니다.`);
    return null;
  }
  return (
    <SvgIcon style={{ width: size, height: size }} className={className} />
  );
};
