export default function penaltyPoints(password) {
  if (password === null) return 0;
  if (typeof password !== "string") password = String(password);
  //regex to return array of duplicate values
  const regExp = /(.)\1+/g;
 
  const matches = password.match(regExp);
  if (!matches) return 0;
  
  return matches.reduce((count, cur) => count + (cur.length > 2 ? 2 : 1), 0);
}
