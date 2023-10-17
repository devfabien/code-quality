export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

export default function isValidPassword(password) {
  if (typeof password !== "string") password = String(password);

  /* check if the password contains lowercase letters, uppercase letters, numbers 
  and also the length of the passowrd is only 10 characters */
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{10}$/.test(password))
    return false;

  if (new Set([...password]).size < 4) return false;

  if (forbiddenPasswords.includes(password)) return false;

  const consecutiveNumbers = [
    "012",
    "123",
    "234",
    "345",
    "456",
    "567",
    "678",
    "789",
    "987",
    "876",
    "765",
    "654",
    "543",
    "432",
    "321",
    "210",
  ].some((numbers) => password.includes(numbers));
  if (consecutiveNumbers) return false;
  return true;
}
