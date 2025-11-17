function validateConfirmPassword({ password, confirmPassword }) {
  if (!confirmPassword) return "*비밀번호를 한번 더 입력해주세요.";
  if (password != confirmPassword) return "*비밀번호가 다릅니다.";

  return "";
}

export default validateConfirmPassword;
