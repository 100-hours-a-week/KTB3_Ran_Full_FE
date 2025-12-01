function validatePostContent(content) {
  if (content.length === 0) return "*내용을 입력해주세요.";

  return "";
}

export default validatePostContent;
