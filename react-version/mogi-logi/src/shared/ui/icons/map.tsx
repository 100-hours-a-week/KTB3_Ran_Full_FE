import Logo from "./assets/logo.svg?react";
export const IconMap = {
  logo: Logo,
};

//IconMap에 있는 key들을 모아서타입으로 만드세
//type IconName : "logo" | "back" |
export type IconName = keyof typeof IconMap;
