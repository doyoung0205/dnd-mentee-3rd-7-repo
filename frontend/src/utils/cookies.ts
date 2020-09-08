function saveAuthToCookie(value: string) {
  document.cookie = `greene_auth=${value}`;
}

function saveRefreshToLocal(value: string) {
  localStorage.setItem("refreshToken", value);
}

function saveUserToCookie(value: string) {
  document.cookie = `greene_user=${value}`;
}

function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)greene_auth\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function saveUserIdToCookie(value: string) {
  document.cookie = `greene_userId=${value}`;
}

function getUserIdFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)greene_userId\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)greene_user\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function deleteCookie(value: string) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveRefreshToLocal,
  saveUserIdToCookie,
  getUserIdFromCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie
};
