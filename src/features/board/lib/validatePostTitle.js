function validatePostTitle(title) {
  if (title.length === 0) return "*제목을 입력해주세요.";
  if (title.length > 26) return "*제목은 최대 26글자까지 입력 가능합니다.";

  return "";
}

export default validatePostTitle;
