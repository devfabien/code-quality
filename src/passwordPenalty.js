export default function penaltyPoints(password) {
  if (typeof password !== "string") password = String(password);
  const REG_EXP=/(.)\1+/g
  if(password === 'null' || password.trim() === '') return 0;
  const matches = password.match(REG_EXP);
  if (!matches) return 0;
  return matches.reduce((count, cur) => count + (cur.length > 2 ? 2 : 1), 0);
}
