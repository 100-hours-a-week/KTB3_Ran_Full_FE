//팩토리 패턴 : svg 아이콘
//선택 이유: 해당 서비스에서 필요한 아이콘은 커뮤니티 & 블로그 이기 때문에
//다양한 아이콘이 바뀌지 않을 것으로 예상하여 svg만 받는다는 전제하에
//svg 아이콘 전용 팩토리 패턴을 작성하게 됨.

import { IconMap, type IconName } from "./map";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = 10, className }: IconProps) => {
  const SvgIcon = IconMap[name];
  return <SvgIcon width={size} height={size} className={className} />;
};
