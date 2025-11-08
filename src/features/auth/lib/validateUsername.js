function validateUsername(username) {
  // 띄어쓰기 불가 10글자 이내
  // 비어있을 시
  // 중복된 닉네임
  if (!username) return "*닉네임을 입력하세요.";
  if (username.includes(" ")) return "*띄어쓰기를 없애주세요.";
  if (username.length > 10)
    return "*닉네임은 최대 10글자 까지 작성 가능합니다.";
  return "";
}

export default validateUsername;
