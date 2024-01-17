import Cookies from "js-cookie";

const TokenKey = "Admin-Token";

export function getToken(type) {
  if (type == "hn") {
    return window.localStorage.getItem("hnToken");
  }
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
