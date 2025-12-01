function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) return "*이메일을 입력해주세요.";
  if (!emailRegex.test(email)) return "*올바른 이메일 형식이 아닙니다.";
  if (email.length < 10) return "*이메일이 너무 짧습니다.";

  return "";
}

export default validateEmail;
