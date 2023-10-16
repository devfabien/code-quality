export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

export default function isValidPassword(password) {
  if (typeof password !== "string") password = String(password);

  if (new Set([...password]).size < 4) return false;

  if (forbiddenPasswords.includes(password)) return false;

  /* check if the password contains lowercase letters, uppercase letters, numbers 
  and also the length of the passowrd is 10 */
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{10}$/.test(password)) return false;
  
  //the following line returns numbers array from the password
  const NUMBERS_ARRAY = password.match(/\d+/g);
  const DIGIT_ARRAYS = NUMBERS_ARRAY.map((number) =>
    number.toString().split("").map(Number)
  );

  const MERGED_ARRAY = [].concat(...DIGIT_ARRAYS);
  return !MERGED_ARRAY.some(
    (number, index) =>
      number + 1 == MERGED_ARRAY[index + 1] ||
      number - 1 == MERGED_ARRAY[index + 1]
  );
}