function saveAuthToCookie(value: string) {
  document.cookie = `greene_auth=${value}`;
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
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie
};
