export function isValidPassword(password) {
  password = `${password}`;

  if (password.length !== 6) {
    return false;
  }

  const [a, b, c, d, e, f] = password;

  return (
    a <= b &&
    b <= c &&
    c <= d &&
    d <= e &&
    e <= f &&
    (a === b || b === c || c === d || d === e || e === f)
  );
}

export function isValidPasswordStrict(password) {
  password = `${password}`;

  if (!isValidPassword(password)) {
    return false;
  }

  const [a, b, c, d, e, f] = password;

  return (
    (a === b && b !== c) ||
    (b === c && c !== d && b !== a) ||
    (c === d && d !== e && c !== b) ||
    (d === e && e !== f && d !== c) ||
    (e === f && e !== d)
  );
}
