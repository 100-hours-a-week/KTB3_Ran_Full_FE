function validatePassword(password) {
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

export default validatePassword;
