export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  if (typeof password !== "string") password = String(password);
 const REG_EXP=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{10}$/
 if(REG_EXP.test(password) && new Set([...password]).size>3) return true
 return false
  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
   * if (password is not exactly 10 digits or characters...) {
   *   return ...;
   * }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   */
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
