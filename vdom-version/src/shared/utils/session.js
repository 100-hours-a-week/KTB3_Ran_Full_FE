const sessionUser = {
  getUser() {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  //function 꼭 추가해야하는가?
  setUser(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  },

  logout() {
    sessionStorage.removeItem("user");
  },
  isLogout() {
    return !this.getUser();
  },
};

export default sessionUser;
