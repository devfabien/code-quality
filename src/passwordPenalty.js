export default function penaltyPoints(password) {
  if (password === null) return 0;
  if (typeof password !== "string") password = String(password);
  //regex to return array of duplicate values
  const REG_EXP = /(.)\1+/g;
 
  const MATHCES = password.match(REG_EXP);
  if (!MATHCES) return 0;
  
  return MATHCES.reduce((count, cur) => count + (cur.length > 2 ? 2 : 1), 0);
}
