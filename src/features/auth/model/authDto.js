export const loginDto = {
  email: "",
  password: "",
};

export const signupDto = (data) => ({
  email: data.email,
  password: data.password,
  confirmPassword: data.confirmPassword,
  username: data.username,
});
