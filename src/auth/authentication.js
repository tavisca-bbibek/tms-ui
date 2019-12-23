export const ROLE_ADMIN = "ADMIN";
export const ROLE_USER = "USER";
const USER_DETAILS = "USER_DETAILS";

class Authentication {
  getUser() {
    return JSON.parse(localStorage.getItem(USER_DETAILS));
  }

  isLoggedIn() {
    if (this.getUser()) return true;
    else return false;
  }

  hasAdminRole() {
    if (this.isLoggedIn() && this.getUser().role === ROLE_ADMIN) return true;
    return false;
  }

  hasUserRole() {
    if (this.isLoggedIn() && this.getUser().role === ROLE_USER) return true;
    return false;
  }

  logout() {
    localStorage.removeItem(USER_DETAILS);
  }

  login(username, password) {
    //Api call;
    const user = { name: "Anoop", role: ROLE_USER, username, password };
    localStorage.setItem(USER_DETAILS, JSON.stringify(user));
  }
}

const authentication = new Authentication();
export default authentication;
