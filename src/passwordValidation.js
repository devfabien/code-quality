export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

export default function isValidPassword(password) {
  if (typeof password !== "string") password = String(password);
  const REG_EXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{10}$/;
  if (
    REG_EXP.test(password) &&
    new Set([...password]).size > 3 &&
    !forbiddenPasswords.includes(password)
  ) {
    const NUMBERS_ARRAY = password.match(/\d+/g);
    const DIGIT_ARRAYS = NUMBERS_ARRAY.map((number) =>
      number.toString().split("").map(Number)
    );
    const MERGED_ARRAY = [].concat(...DIGIT_ARRAYS);
    return !MERGED_ARRAY.some(
      (a, i) => a + 1 == MERGED_ARRAY[i + 1] || a - 1 == MERGED_ARRAY[i + 1]
    );
  }

  return false;
}
