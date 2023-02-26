// Code for handling cookies
// The code is copied (and modified) from app-dev/security-examples/07-backend-frontend-jwt-auth

/**
 * Get value of a specific cookie.
 * Code copied from https://www.w3schools.com/js/js_cookies.asp
 * @param cname Cookie name (key)
 * @returns {string} Value of the cookie or "" if cookie not found
 */
export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
