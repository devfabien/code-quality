export default function countR(string) {
  let count = 0;
  for (const CHAR of string) {
    if (CHAR == "R") count++;
  }
  return count;
}
