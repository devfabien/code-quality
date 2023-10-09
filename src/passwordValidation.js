export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

export default function isValidPassword(password) {
  const REG_EXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{10}$/;
  if (
    (REG_EXP.test(password)) &&
    (new Set([...password]).size > 3) &&
    (!forbiddenPasswords.includes(password))
  )
    return true; 
  return false;
}
