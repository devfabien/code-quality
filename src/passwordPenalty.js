export default function penaltyPoints(password) {
  if (typeof password !== "string") password = String(password);
  const REG_EXP = /(.)\1+/g;
  if (password === "null") return 0;
  const MATHCES = password.match(REG_EXP);
  if (!MATHCES) return 0;
  return MATHCES.reduce((count, cur) => count + (cur.length > 2 ? 2 : 1), 0);
}
