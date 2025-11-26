export const loginDto = (props) => ({
  email: props.email,
  password: props.password,
});

export const signupDto = (data) => ({
  email: data.email,
  password: data.password,
  confirmPassword: data.passwordConfirm,
  username: data.username,
});
