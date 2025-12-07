export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) return "*이메일을 입력해주세요.";
  if (!emailRegex.test(email)) return "*올바른 이메일 형식이 아닙니다.";
  if (email.length < 10) return "*이메일이 너무 짧습니다.";

  return "";
}

export function validatePassword(password) {
  //비밀번호 형식
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;
  if (password == undefined) {
    console.log(password);
    return "*비밀번호를 입력해주세요.";
  }
  if (!passwordRegex.test(password))
    return "*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.";

  return "";
}

export function validateUsername(username) {
  // 띄어쓰기 불가 10글자 이내
  // 비어있을 시
  // 중복된 닉네임
  if (!username) return "*닉네임을 입력하세요.";
  if (username.includes(" ")) return "*띄어쓰기를 없애주세요.";
  if (username.length > 10)
    return "*닉네임은 최대 10글자 까지 작성 가능합니다.";
  return "";
}

export function validateConfirmPassword({ password, confirmPassword }) {
  if (!confirmPassword) return "*비밀번호를 한번 더 입력해주세요.";
  if (password !== confirmPassword) return "*비밀번호가 다릅니다.";

  return "";
}
