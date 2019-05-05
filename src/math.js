export const isPrime = n => {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n === 3) return true;
  if (n % 2 === 0) return false;
  if (n % 3 === 0) return false;

  let i = 5;
  let w = 2;

  while (i * i <= n) {
    if (n % i === 0) return false;
    i += w;
    w = 6 - w;
  }

  return true;
};

export const nextOddPerfectSquare = n => {
  const next = Math.ceil(Math.sqrt(n)) ** 2;
  if (next % 2 === 0) {
    return nextOddPerfectSquare(next + 1);
  }
  return next;
};
