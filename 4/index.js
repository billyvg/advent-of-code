import { isValidPassword, isValidPasswordStrict } from "./isValidPassword.js";

export default async function main() {
  const range = [284639, 748759];
  let valid = [];
  let validStrict = [];

  for (let i = range[0]; i <= range[1]; i++) {
    if (isValidPassword(i)) {
      valid.push(i);
    }
    if (isValidPasswordStrict(i)) {
      validStrict.push(i);
    }
  }

  return [valid.length, validStrict.length];
}
